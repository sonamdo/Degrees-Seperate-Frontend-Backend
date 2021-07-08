class Connection < ApplicationRecord
    validates :user1, presence: true
    validates :user2, presence: true
end
