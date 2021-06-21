module Api
	module V1
		class RacersController < ApplicationController
      def index
        racers = Racer.all

        render json: RacerSerializer.new(racers).serializable_hash
      end

      def show
        racer = Racer.find_by(id: params[:id])

        render json: RacersSerializer.new(racer).serializable_hash
      end
		end
	end
end
