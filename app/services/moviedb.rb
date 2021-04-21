module Moviedb
  class Search
    def self.by_title(title, page)
      begin
        movies_response =
          Faraday.get "https://api.themoviedb.org/3/search/movie?api_key=#{ENV['API_KEY']}&query=#{title}&page=#{page}"
        @config_response ||=
          Faraday.get "https://api.themoviedb.org/3/configuration?api_key=#{ENV['API_KEY']}"

        if (movies_response.status == 200 && @config_response.status === 200)
          config_json = JSON.parse(@config_response.body)
          movies_json = JSON.parse(movies_response.body)
          {
            config: config_json['images'],
            page: movies_json['page'],
            movies: movies_json['results'],
            total_pages: movies_json['total_pages'],
            total_results: movies_json['total_results'],
          }
        end
      rescue Faraday::ResourceNotFound => e
        e.response[:status]
      end
    end

    def self.trending_movies
      begin
        trending_response =
          Faraday.get "https://api.themoviedb.org/3/trending/movie/week?api_key=#{ENV['API_KEY']}"
        @config_response ||=
          Faraday.get "https://api.themoviedb.org/3/configuration?api_key=#{ENV['API_KEY']}"

        if (trending_response.status == 200 && @config_response.status === 200)
          config_json = JSON.parse(@config_response.body)
          trending_json = JSON.parse(trending_response.body)
          { config: config_json['images'], movies: trending_json['results'] }
        end
      rescue Faraday::ResourceNotFound => e
        e.response[:status]
      end
    end
  end
end
