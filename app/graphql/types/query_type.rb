module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :test_field, String, null: false, description: "An example field added by the generator"
    field :search_movie_by, Types::SearchResultType, null: false do
      argument :title, String, 'The title of the movie', required: true
      argument :page, Int, 'The next page of results', required: false
      argument :filter, Types::MovieSortType, required: false, default_value: nil
    end

    def search_movie_by(title:, page: 1, filter: nil)
      movies = Moviedb::Search.by_title(title, page)
      if (filter)
        filtered_movies = movies[:movies].sort_by { |h| h[filter] }
        {
          config: movies[:config],
          page: movies[:page],
          total_pages: movies[:total_pages],
          total_results: movies[:total_results],
          movies: filtered_movies,
        }
      else
        movies
      end
    end

    def test_field
      "Hello World!"
    end
  end
end
