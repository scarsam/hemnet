module Types
  class ConfigType < Types::BaseObject
    field :base_url, String, null: true
    field :secure_base_url, String, null: true
    field :backdrop_sizes, [String], null: true
    field :logo_sizes, [String], null: true
    field :poster_sizes, [String], null: true
    field :profile_sizes, [String], null: true
    field :still_sizes, [String], null: true
  end
end
