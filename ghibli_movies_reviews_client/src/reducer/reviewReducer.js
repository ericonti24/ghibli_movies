import {postReview, fetchReviews} from '../apiRequests/apiCalls'

const initialState = {
    reviews: [
      { id: 0, content: 'YOOO', movieID: "3"},
    ],

  }

export default async function manageReviews(state = initialState, action) {
    console.log(state)
    switch (action.type) {
        case 'ADD_REVIEW':
            const review = { content: action.review.text, movieID: action.review.movieID }
            const response = await postReview(JSON.stringify({review: review}))
            console.log('response', response)
            // return { ...state, reviews: [ ...state.reviews, response]}
            return { ...state, reviews: [...state.reviews, response]}


        case 'DELETE_REVIEW':
            const filteredReviews = state.reviews.filter(review => review.id !== action.id)
            return { ...state, filteredReviews}

        case 'GET_REVIEWS':
            const reviews = await fetchReviews()
            return {...state}
        default: 
        return state
    }
}