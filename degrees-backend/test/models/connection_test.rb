require "test_helper"

class ConnectionTest < ActiveSupport::TestCase

  def setup
    @connection = Connection.new(user1: 101, user2: 201)
  end

  test "should be valid" do
    assert @connection.valid?
  end

end
