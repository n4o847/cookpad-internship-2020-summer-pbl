class TagsController < ApplicationController
  def index
    @tags = Tag.all
    render json: @tags
  end

  def show
    @tag = Tag.find(params[:id])
    users = @tag.users
    render json: @tag.as_json.merge(
      users: users,
      recipes: Recipe.where(user: users)
    )
  end
end
