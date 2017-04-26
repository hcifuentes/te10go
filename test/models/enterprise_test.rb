# == Schema Information
#
# Table name: enterprises
#
#  id         :integer          not null, primary key
#  name       :string
#  active     :boolean
#  holding_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_enterprises_on_holding_id  (holding_id)
#

require 'test_helper'

class EnterpriseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
