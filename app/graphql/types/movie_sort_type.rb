module Types
  class MovieSortType < Types::BaseEnum
    value "titleAsc", value: 'title'
    value "votesCountAsc", value: 'vote_count'
    value "votesAverageAsc", value: 'vote_average'
    value "releaseDateAsc", value: 'release_date'
  end
end
