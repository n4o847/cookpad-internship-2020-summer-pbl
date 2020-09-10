class Recipe < ApplicationRecord
  belongs_to :user
  belongs_to :image, optional: true

  attribute :user
end
