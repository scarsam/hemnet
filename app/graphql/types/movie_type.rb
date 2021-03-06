module Types
  class MovieType < Types::BaseObject
    field :id, Int, null: true
    field :title, String, null: true
    field :overview, String, null: true
    field :vote_average, Int, null: true
    field :vote_count, Int, null: true
    field :release_date, String, null: true
    field :poster_path, String, null: true
    field :backdrop_path, String, null: true
  end
end
