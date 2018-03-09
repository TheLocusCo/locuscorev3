class AddAttachmentsToMedia < ActiveRecord::Migration[5.1]
  def change
    add_attachment :media, :image
    add_attachment :media, :generic
  end
end
