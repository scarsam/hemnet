require "rails_helper"

RSpec.describe 'MovieDB' do
  describe('regular search') do
    let(:response) { Moviedb::Search.by_title('dark', 1) }

    it "returns a response", :vcr do
      expect(response).to have_key(:config)
      expect(response).to have_key(:movie)
    end
  end
end
