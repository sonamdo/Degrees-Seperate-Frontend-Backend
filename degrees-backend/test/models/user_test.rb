require "test_helper"

class UserTest < ActiveSupport::TestCase

  def setup
    @user = User.new(name: "John", userid: 1)
  end

  test "should be valid" do
    assert @user.valid?
  end

  test "name should not be too long" do
    @user.name = "b"*51
    assert_not @user.valid?
  end

end
