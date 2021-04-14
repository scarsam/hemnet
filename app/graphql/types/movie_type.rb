module Types
  class MovieType < Types::BaseObject
    field :Title, String, null: true
    field :Year, String, null: true
    field :Rated, String, null: true
    field :Runtime, String, null: true
    field :Released, String, null: true
    field :Genre, String, null: true
    field :Director, String, null: true
    field :Writer, String, null: true
    field :Actors, String, null: true
    field :Plot, String, null: true
    field :Language, String, null: true
    field :Country, String, null: true
    field :Awards, String, null: true
    field :Poster, String, null: true
    field :Ratings, [Types::RatingType], null: true
    field :Type, String, null: true
    field :DVD, String, null: true
    field :BoxOffice, String, null: true
    field :Production, String, null: true
    field :Website, String, null: true
    field :Response, String, null: true
    field :Metascore, String, null: true
    field :imdbRating, String, null: true
    field :imdbVotes, String, null: true
    field :imdbID, String, null: true
  end
end
