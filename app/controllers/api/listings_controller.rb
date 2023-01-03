class Api::ListingsController < ApplicationController
    before_action :set_listing, only: [:show, :update, :destroy]

    def index
        @listings = Listing.all
    end

    def show
    end

    def create
        if @listing.save
            render :show
        else
            render json :@listing.errors.full_messages, status: 422
        end
    end

    def update
        if @listing.update(listing_params)
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def destroy
        @listing.destroy
        head :no_content # return header only
    end


    private
    def set_listing
        @listing = Listing.find(params[:id])
    rescue
        render json: ['Listing not found'], status: :not_found
    end

    def listing_params
        params.require(:listing).permit(
            :owner_id,
            :title,
            :description,
            :address,
            :city,
            :state,
            :zip_code,
            :price,
            :num_beds,
            :num_baths
        )
    end
end
