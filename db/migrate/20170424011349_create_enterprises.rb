class CreateEnterprises < ActiveRecord::Migration[5.1]
  def change
    create_table :enterprises do |t|
      t.string :name
      t.boolean :active
      t.belongs_to :holding, index: true, foreign_key: true

      t.timestamps
    end
  end
end
