class Api::ReviewsController < ApplicationController
    before_action :set_review, only: [:show, :update, :destroy]

    def index
        @reviews = Review.all
    end

    def show
        render :show
    end

    def create
        if @review.save
            render :show
        else
            render json :@review.errors.full_messages, status: 422
        end
    end

    def update
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review.destroy
        head :no_content # return header only
    end


    private
    def set_review
        @review = Review.find(params[:id])
    rescue
        render json: ['Review not found'], status: :not_found
    end

    def review_params
        params.require(:review).permit(
            :reviewer_id,
            :listing_id,
            :title,
            :body,
            :star_rating
        )
    end
end
