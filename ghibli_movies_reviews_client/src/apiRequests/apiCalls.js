const BACKEND_URL = "http://127.0.0.1:3001"

export async function fetchReviews() {
    const response = await fetch(`${BACKEND_URL}/reviews`)
    const result = response.json()
    return result
}

export async function postReview(payload) {
    const response = await fetch(`${BACKEND_URL}/reviews`, 
        {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                'Accept': "application/json"
            },
            body: payload
        }
        
    )
    const result = await response.json()

    return result
}

