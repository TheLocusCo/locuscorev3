class SearchController < ApplicationController
  before_action :hash_creation

  def field_search
    if !params.key?(:model) || !params.key?(:field)
      render json: {errors: [{params: "Missing model or field params for search query"}]}, status: :unprocessable_entity
    end

    if @master_hash[params[:model].to_sym][params[:field].to_sym][:type] == "date"
      @field_search_results = {}
      @field_search_results[:earliest] = params[:model].capitalize.singularize.camelize.constantize.class_eval(
        @master_hash[params[:model].to_sym][params[:field].to_sym][:nested_action][:select_from][:earliest]
      )
      @field_search_results[:latest] = params[:model].capitalize.singularize.camelize.constantize.class_eval(
        @master_hash[params[:model].to_sym][params[:field].to_sym][:nested_action][:select_from][:latest]
      )
    else
      @field_search_results = params[:model].capitalize.singularize.camelize.constantize.class_eval(
        @master_hash[params[:model].to_sym][params[:field].to_sym][:nested_action][:select_from]
      )
    end
  end

  def search_tree
  end

  def search_submit
    prepared_model = "#{params[:model].singularize.capitalize.camelize}"
    query_string = prepared_model.dup
    @search_results = {}
    @search_results[:model] = params[:model]
    @search_results[:params] = {}

    params.except(:model, :search, :action, :controller, :page).each_pair do |column, val|
      next unless @master_hash[params[:model].to_sym].key?(column.to_sym)

      c_h = @master_hash[params[:model].to_sym][column.to_sym]
      column = c_h[:nested_action][:overriding] if c_h[:nested_action].key?(:overriding)

      case c_h[:type]
      when "string"
        if c_h[:nested_action] == nil
          query_string << ".basic_search(#{column}: \"#{val}\")"
        elsif c_h[:nested_action].key?(:join_on)
          join_name = c_h[:nested_action][:join_on][:name].to_s
          query_string << ".joins(:#{join_name}).where(#{join_name.pluralize}: {#{c_h[:nested_action][:join_on][:field]}: \"#{val}\"})"
        else
          search_type = c_h[:nested_action].key(:search_type) ? c_h[:nested_action][:search_type] : 'basic'
          query_string << ".#{search_type}_search(#{column}: \"#{val}\")"
        end
      when "boolean"
        query_string << ".where(#{column}: #{val})"
      when "integer"
        query_string << ".where(#{column}: #{val})"
      when 'hidden'
        query_string << c_h[:nested_action][:embedded]
      when 'params'
        c_h[:nested_action][:params].each_pair do |k, v|
          @search_results[:params][k.to_sym] = v
        end
      end
    end

    params.select {|key, val| key.match(/^daterange_[a-z|_]+_(start|end)$/)}.each_pair do |column, val|
      term = column.scan(/^daterange_([a-z|_]+)_(start|end)$/).flatten.first

      if params.select {|key, val| key.match(/^daterange_[a-z|_]+_start$/)}.empty?
        query_string << ".where(\"#{term} < ?\", DateTime.parse(\"#{val}\"))"
      elsif params.select {|key, val| key.match(/^daterange_[a-z|_]+_end$/)}.empty?
        query_string << ".where(\"#{term} > ?\", DateTime.parse(\"#{val}\").end_of_day)"
      else
        next if query_string.include?(term)
        query_string << ".where(#{term}: DateTime.parse(\"#{params["daterange_#{term}_start"]}\")..DateTime.parse(\"#{params["daterange_#{term}_end"]}\").end_of_day)"
      end
    end

    @search_results[:initial_results] = prepared_model.constantize.class_eval(query_string).order("created_at DESC")

    if @search_results[:params][:fancyDisplay]
      @search_results[:results] = @search_results[:initial_results]
    else
      @search_results[:results] = @search_results[:initial_results].dup.fetch_ordered_by_page_for_search(params[:page])
    end

    @search_results.merge!(prepared_model.constantize.send(:map_pagination_meta, prepared_model.constantize::DEFAULT_PAGINATION_COLUMN, @search_results[:initial_results]))
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
