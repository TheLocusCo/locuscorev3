class AddVisitsToRoles < ActiveRecord::Migration[5.1]
  def change
    add_column :roles, :pf_visits, :string, default: ""
  end
end
