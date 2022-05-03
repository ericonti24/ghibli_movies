import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

	render() {
			console.log('REVIEWS CONTAINER', this.props.movieID)
        return (
            <div>
                <ReviewInput 
                    addReview={this.props.addReview}
                    movieID={this.props.movieID}
                />
                <Reviews
                    reviews={this.props.reviews}
                    movieID={this.props.movieID}
                />
                
            </div>
        )
    }
}

const mapStateToProps = state => ({ reviews: state.reviews})

const mapDispatchToProps = dispatch => ({
    addReview: review => dispatch({type: 'ADD_REVIEW', review}),
    deleteReview: id => dispatch({type: 'DELETE_REVIEW', id}) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
