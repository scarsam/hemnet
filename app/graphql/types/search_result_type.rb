module Types
  class SearchResultType < Types::BaseObject
    field :total_results, String, null: false
    field :response, String, null: false
    field :movies, [Types::MovieType], null: false
  end
end
