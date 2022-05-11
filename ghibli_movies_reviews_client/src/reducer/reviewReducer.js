const initialState = {
    reviews: [],
		errors:[]
  }

export default function manageReviews(state = initialState, action) {
    switch (action.type) {
        case 'ADD_REVIEW':
					if(action.data.error){
						return {...state, errors: [...state.errors, action.data.error]}
					}
          return { ...state, reviews: [ ...state.reviews, action.data]}

        case 'DELETE_REVIEW':
          // debugger
            const filteredReviews = state.reviews.filter(review => review.id !== action.id)
            return { ...state, reviews: filteredReviews}

        case 'GET_REVIEWS':
            return { ...state, reviews: [...state.reviews, ...action.data] }
            
				case 'GET_REVIEWS_FAILURE':

					return { ...state }
        default: 
        	return state;
    }
}