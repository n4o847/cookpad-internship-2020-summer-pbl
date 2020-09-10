class Tag < ApplicationRecord
  has_many :user_tags
  has_many :users, through: :user_tags
  has_many :recipe_tags
  has_many :recipes, through: :recipe_tags
end
