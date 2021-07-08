class User < ApplicationRecord
    validates :name, presence: true, length: { maximum: 50 }
    validates :userid, presence: true, uniqueness: true, numericality: { only_integer: true }
end
