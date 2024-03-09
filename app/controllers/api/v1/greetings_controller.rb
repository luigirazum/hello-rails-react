module Api
  module V1
    class GreetingsController < ApplicationController
      def random
        @message = Greeting.all.sample
        respond_to do |format|
          format.json do
            if Greeting.any?
              render json: @message
            else
              render plain: 'There are no messages', status: :not_found
            end
          end
        end
      end
    end
  end
end
