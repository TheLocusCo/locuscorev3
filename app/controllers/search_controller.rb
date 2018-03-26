class SearchController < ApplicationController
  before_action :hash_creation
  #this controller should pass off whatever its queries results are to the *index* of the controller its searching in
  def index
  end

  def field_search
    if !params.key?(:model) || !params.key?(:field)
      render json: {errors: [{params: "Missing model or field params for search query"}]}, status: :unprocessable_entity
    end
    @field_search_results = params[:model].capitalize.singularize.camelize.constantize.class_eval(
      @master_hash[params[:model].to_sym][params[:field].to_sym][:nested_action][:select_from]
    )
  end

  def search_tree
  end

  def search_submit
    prepared_model = "#{params[:model].singularize.capitalize.camelize}"
    query_string = prepared_model.dup
    @search_results = {}
    @search_results[:model] = params[:model]
    @search_results[:params] = {}

    params.except(:model, :search, :action, :controller).each_pair do |column, val|
      c_h = @master_hash[params[:model].to_sym][column.to_sym]
      column = c_h[:nested_action][:overriding] if c_h[:nested_action].key?(:overriding)

      case c_h[:type]
      when "string"
        if c_h[:nested_action] == nil
          query_string << ".basic_search(:#{column.to_sym}=> \"#{val}\")"
        else
          search_type = c_h[:nested_action].key(:search_type) ? c_h[:nested_action][:search_type] : 'basic'
          query_string << ".#{search_type}_search(:#{column.to_sym}=> \"#{val}\")"
        end
      when "boolean"
        query_string << ".where(:#{column.to_sym}=> #{val})"
      when "integer"
        query_string << ".where(:#{column.to_sym}=> #{val})"
      when 'hidden'
        query_string << c_h[:nested_action][:embedded]
      when 'params'
        c_h[:nested_action][:params].each_pair do |k, v|
          @search_results[:params][k.to_sym] = v
        end
      end
    end

    @search_results[:results] = prepared_model.constantize.class_eval(query_string)
    @search_results.merge!(prepared_model.constantize.class_eval("map_pagination_meta(#{prepared_model}::DEFAULT_PAGINATION_COLUMN)"))
  end

  def search
    ret_error = false
    comp_arr = Search.paramable_array(@master_hash, params) #you cant search for a model that isnt within your master_hash

    if ret_error
      flash[:error] = "You do not possess sufficient privileges to search for those params."
      respond_to do |format|
        format.html {redirect_to root_path and return}
      end
    end

    query_string = "#{params[:model].singularize.capitalize.camelize}"
    params[:search].each_pair do |key, val|
      h = {}
      term = key.split('-').at(1).to_sym
      h = @master_hash[params[:model].to_sym][term]
      term = h[:nested_action][:overriding] if h[:nested_action] && h[:nested_action][:overriding]
      if h[:type] == "string"
        if h[:nested_action] == nil
          query_string << ".fuzzy_search(:#{term}=> \"#{val}\")"
        else
          search_type = h[:nested_action].key?(:search_type) ? h[:nested_action][:search_type] : 'basic'
          query_string << ".#{search_type}_search(:#{term}=> \"#{val}\")"
        end
      elsif h[:type] == "boolean"
        query_string << ".where(:#{term}=> #{val})"
      elsif h[:type] == "integer"
        query_string << ".where(:#{term}=> #{val})"
      elsif h[:type] == 'hidden'
        query_string << h[:nested_action][:embedded]
      elsif h[:type] == 'params'
        h[:nested_action][:params].each_pair do |k, v|
          params[k.to_sym] = v
        end
      end
    end if params[:search]

    if params['date-search']
      h     = {}
      s1    = params['date-search'].keys.first
      term  = s1.split('-').at(1).to_sym
      h     = @master_hash[params[:model].to_sym][term]
      s1val = params['date-search'][s1]

      s2    = params['date-search'].keys.last
      s2val = params['date-search'][s2]
      term = h[:nested_action][:overriding] if h[:nested_action][:overriding]

      if DateTime.parse(s1val).beginning_of_day < DateTime.parse(s2val).end_of_day
        query_string << ".where(:#{term}=>DateTime.parse(\"#{s1val}\").beginning_of_day..DateTime.parse(\"#{s2val}\").end_of_day)"
      else
        query_string << ".where(:#{term}=>DateTime.parse(\"#{s2val}\").beginning_of_day..DateTime.parse(\"#{s1val}\").end_of_day)"
      end
    end

    eval("@#{params[:model]} = #{query_string}")

    ret_loc = 'index'
    ret_controller = "#{params[:model]}"
    if params[:model] == 'posts' && !(can? :manage, Post)
      ret_controller = 'welcome'
      ret_loc = "blog"
    elsif params[:model] == 'projects' && !(can? :manage, Project)
      ret_controller = 'welcome'
      ret_loc = "portfolio"
    elsif params[:model] == 'mangas'
      params[:js] = 'true'
    elsif params[:model] == 'requests'
      params[:processing] = 'true'
      params[:list] = 'true'
    end

    puts "going to #{ret_controller}/#{ret_loc}"

    render "#{ret_controller}/#{ret_loc}"
  end

  private
  def hash_creation
    if current_user
      @master_hash ||= Rails.cache.fetch("#{current_user.username}_search_cache".to_sym) do
        Search.searchable_hash(current_user.id)
      end
    else
      @master_hash ||= Rails.cache.fetch("anon_search_cache".to_sym) do
        Search.searchable_hash(nil)
      end
    end
  end
end
