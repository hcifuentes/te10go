Rails.application.routes.draw do
<<<<<<< HEAD
=======
  devise_for :users, controllers:{
    sessions: 'authentication/sessions',
    registrations: 'authentication/registrations'
  }

  authenticated :user do
    root 'main#dashboard', as: :authenticated_root
  end

  root 'main#home'

>>>>>>> 67f9507c7c8a09c417f331808a96e00234ea66ba
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
