import {postReview, fetchReviews} from '../apiRequests/apiCalls'

const initialState = {
    reviews: [],
		errors:[]
  }

export default function manageReviews(state = initialState, action) {
    switch (action.type) {
        case 'ADD_REVIEW':
          // const review ={ content: action.review.content, movieID: action.review.movieID }
          // return { ...state, reviews: [...state.reviews, review]}
					if(action.data.error){
						return {...state, errors: [...state.errors, action.data.error]}
					}
          return { ...state, reviews: [ ...state.reviews, action.data]}

        case 'DELETE_REVIEW':
          const reviews = state.reviews.filter(review => review.id !== action.id)
          return {...state, reviews}
          
            // const filteredReviews = state.reviews.filter(review => review.id !== action.id)
            // return { ...state, filteredReviews}

        case 'GET_REVIEWS':
            return { ...state, reviews: [...state.reviews, ...action.data] }
				case 'GET_REVIEWS_FAILURE':

					return { ...state }
        default: 
        	return state;
    }
}