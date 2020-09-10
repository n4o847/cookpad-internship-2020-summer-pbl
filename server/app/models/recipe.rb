class Recipe < ApplicationRecord
  belongs_to :user
  belongs_to :image, optional: true
  has_many :recipe_tags
  has_many :tags, through: :recipe_tags

  attribute :user
  attribute :tags
end
