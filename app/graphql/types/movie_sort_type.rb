module Types
  class MovieSortType < Types::BaseEnum
    value "title", value: 'title'
    value "votesCount", value: 'vote_count'
    value "votesAverage", value: 'vote_average'
    value "releaseDate", value: 'release_date'
  end
end
