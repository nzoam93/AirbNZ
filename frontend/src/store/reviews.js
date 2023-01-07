//ACTION CONSTANTS
export const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

//ACTION CREATORS
const receive_reviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const recieve_review = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

const remove_review = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})


//CUSTOM SELECTORS

//returns an array of all the reviews in state
export const getReviews = (state) => {
    if (state.reviews){
        return Object.values(state.reviews);
    }
    else {
        return [];
    }
}

//returns a single review in state
export const getReview = (reviewId) => (state) => {
    if(state.reviews && state.reviews[reviewId]){
        return state.reviews[reviewId];
    }
    else {
        return null;
    }
}


//THUNK ACTION CREATORS

//fetch all the reviews from backend
export const fetchReviews = () => async (dispatch) => {
    const response = await fetch ('/api/reviews');
    if (response.ok){
        const reviews = await response.json();
        dispatch(receive_reviews(reviews));
    }
}

//fetch the specified review from backend
export const fetchReview = (reviewId) => async (dispatch) => {
    const response = await fetch (`/api/reviews/${reviewId}`);
    if(response.ok){
        const review = await response.json();
        dispatch(recieve_review(review));
    }
}

//create a new review in the backend
export const createReview = (review) => async (dispatch) => {
    const response = await fetch (`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok){
        const review = await response.json();
        dispatch(recieve_review(review));
    }
}

//update an existing review in the backend
export const updateReview = (review) => async (dispatch) => {
    const response = await fetch (`/api/reviews/${review.id}`, {
        method: `PUT`,
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok){
        const review = await response.json();
        dispatch(recieve_review(review));
    }
}

//remove a review in the backend
export const deleteReview = (reviewId) => async (dispatch) => {
    const response = await fetch (`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })
    if (response.ok){
        dispatch(remove_review(reviewId));
    }
}


//REVIEWS REDUCER (THIS IS WHAT CHANGES STATE)
const reviewsReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_REVIEWS:
            return {...state, ...action.reviews}
        case RECEIVE_REVIEW:
            return {...state, [action.review.id]: action.review}
        case REMOVE_REVIEW:
            const newState = {...state};
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;
