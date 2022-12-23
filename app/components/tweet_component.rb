# frozen_string_literal: true

class TweetComponent < ViewComponent::Base
  def initialize(tweet:)
    @tweet = tweet
  end

end
