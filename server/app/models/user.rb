class User < ApplicationRecord
  has_many :recipes
  has_many :user_tags
  has_many :tags, through: :user_tags

  attribute :tags
end
