module Types
  class SearchResultType < Types::BaseObject
    field :config, Types::ConfigType, null: false
    field :page, Int, null: false
    field :total_pages, Int, null: false
    field :total_results, Int, null: false
    field :movies, [Types::MovieType], null: false
  end
end
