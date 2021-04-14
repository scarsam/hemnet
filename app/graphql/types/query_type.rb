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
    end

    def search_movie_by(title:)
      test = Omdb::Search.by_title(title)
      test
    end

    def test_field
      "Hello World!"
    end
  end
end
