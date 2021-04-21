module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :search_movie_by, Types::SearchResultType, null: false do
      argument :title, String, 'The title of the movie', required: true
      argument :page, Int, 'The next page of results', required: false
      argument :filter, Types::MovieSortType, required: false
    end

    field :trending_movies, Types::SearchResultType, null: false

    def search_movie_by(title:, page: 1, filter: '')
      movies = Moviedb::Search.by_title(title, page)
      if (filter)
        filtered_movies = movies[:movies].sort_by { |h| h[filter] }.reverse
        updated_movies = movies.merge({ movies: filtered_movies })
      else
        movies
      end
    end

    def trending_movies
      trending = Moviedb::Search.trending_movies
      random_trending = trending[:movies].sample
      updated_trending = trending.merge({ movies: [random_trending] })
    end
  end
end
