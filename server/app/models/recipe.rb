class Recipe < ApplicationRecord
  belongs_to :user

  attribute :user
end
