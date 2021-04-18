require "rails_helper"

RSpec.describe 'MovieDB' do
  describe('calls helper method') do
    let(:response) { Moviedb::Search.by_title('dark', 1) }

    it "returns a response", :vcr do
      p response
      expect(response).to have_key(:config)
      expect(response).to have_key(:movie)
    end
  end
end
