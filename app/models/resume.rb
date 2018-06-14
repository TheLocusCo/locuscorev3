require "open-uri"
require 'fileutils'

class Resume < ApplicationRecord
  DEFAULT_PAGINATION_COLUMN = :title
  extend FriendlyId
  friendly_id :title, use: :slugged

  scope :get_meta_titles_for_page, -> (page) { order("created_at DESC").select(:id, :created_at, :title).limit(10).offset(10 * (page - 1)) }

  def self.text_fields
    {prawn_content: :prawn}
  end

  def self.tooltips
    {tooltips: {company: "The first thelocus company resume will be the one that is offered for users to download on the resume_welcome page"}}
  end

  def file_title
    title.gsub(/[?:.\/\\\*<>|\"]/,'').gsub(' ','_').downcase + '.pdf'
  end

  def generate_pdf(*do_not_render_to_file)

    FileUtils.mkdir_p(Rails.root.join('tmp', "resumes"))
    delete_on_disk

    pdf = Prawn::Document.new

    pdf.instance_eval(prawn_content.html_safe)

    unless do_not_render_to_file
      pdf.render_file Rails.root.join("tmp","resumes", file_title)
    end

    return pdf if do_not_render_to_file
  end

  def delete_on_disk
    FileUtils.rm(Rails.root.join('tmp', "resumes", "#{file_title}")) if File.exist?(Rails.root.join('tmp', "resumes", "#{file_title}"))
  end

  def not_already_generated
    !File.exist?(Rails.root.join('tmp', "resumes", "#{file_title}"))
  end
end
