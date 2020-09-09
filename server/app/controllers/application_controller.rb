class ApplicationController < ActionController::API
  def hello
    render json: { text: "Hello, world!" }
  end
end
