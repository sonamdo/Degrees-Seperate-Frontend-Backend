require 'csv'

class UsersController < ApplicationController
  def index
    user = User.all.order(created_at: :desc)
    render json: user
  end

  def create
    readThis = CSV.read(params[:file])
    readThis.each do |x|
      user = User.new(name: x[1], userid: x[0])
      user.valid?
      user.save
    end
  end

  def show
  end

  def destroy
  end
end
