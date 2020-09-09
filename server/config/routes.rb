Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '/api' do
    get '/hello', to: 'application#hello'
    resources :users
    resources :recipes
  end
end
