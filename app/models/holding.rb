# == Schema Information
#
# Table name: holdings
#
#  id         :integer          not null, primary key
#  name       :string
#  active     :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Holding < ApplicationRecord
    has_many :enterprises
end
