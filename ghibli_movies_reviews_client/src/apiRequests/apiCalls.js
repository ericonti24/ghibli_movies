// import Review from "../components/reviews/Review"

const BACKEND_URL = "http://127.0.0.1:3001"

export function fetchReviews(dispatch) {
		return fetch(`${BACKEND_URL}/reviews`)
		.then(res => res.json())
		.then(
			data => dispatch({ type: 'GET_REVIEWS', data }),
      err => dispatch({ type: 'GET_REVIEWS_FAILURE', err })
		)
}

export function postReview(dispatch, payload) {
     return fetch(`${BACKEND_URL}/reviews`, 
        {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                'Accept': "application/json"
            },
            body: payload
        }
    )
		.then(res => res.json())
		.then(
			data => dispatch({ type: 'ADD_REVIEW', data  })
		)
}

export function deleteReview(id) {
    return (dispatch) => {
        fetch(`${BACKEND_URL}/reviews/${id}`, {
            method: "DELETE"
        })
        // .then(res => res.json())
        .then(id => dispatch({type: 'DELETE_REVIEW', payload: id}))
    }
    
}


// export const deleteReview = id => (
//     fetch(`${BACKEND_URL}/reviews/${id}`, 
//     {
//         type: 'DELETE_REVIEW'
//     })
// )

