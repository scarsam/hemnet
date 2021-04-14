module Omdb
  class Search
    def self.by_title(title)
      response = Faraday.get "http://www.omdbapi.com/?apikey=#{ENV['API_KEY']}&s=#{title}"

      if (response.status == 200)
        result = JSON.parse(response.body)
        {
          total_results: result["totalResults"],
          response: result["Response"],
          movies: result["Search"],
        }
      end
    end
  end
end
