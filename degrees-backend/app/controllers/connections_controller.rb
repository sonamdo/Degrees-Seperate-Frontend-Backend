require 'csv'

class ConnectionsController < ApplicationController
  def create
    readThis = CSV.read(params[:file])
    readThis.each do |x|
      connection = Connection.new(user1: x[0], user2: x[1])
      connection.valid?
      connection.save
    end
  end


  def index
    user = User.all.order(created_at: :desc)
    render json: user
  end

  def show
    @user1 = User.find_by(name:params[:user1]).userid
    @user2 = User.find_by(name:params[:user2]).userid

    puts "first node is #{@user1}, second node is #{@user2}"
    
    @edges = []

    # create an array of edges
    Connection.all.each do |x|
      @edges.push([x.user1, x.user2])
    end

    # returns steps required to connect users. If not possible, return 0
    @answer = helpers.degrees_of_separation(@user1, @user2, @edges)
    puts "HELPER: #{@answer}"
    render json: @answer

  end

end


