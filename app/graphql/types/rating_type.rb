module Types
  class RatingType < Types::BaseObject
    field :Source, String, null: true
    field :Value, String, null: true
  end
end
