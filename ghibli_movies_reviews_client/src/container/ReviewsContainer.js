import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import './Reviews.css'

class ReviewsContainer extends Component {

	render() {
        return (
            <div className='reviews-container'>
                <ReviewInput 
                    addReview={this.props.addReview}
                    movieID={this.props.movieID}
                />
                <Reviews
                    reviews={this.props.reviews}
                    movieID={this.props.movieID}
                    deleteReview={this.props.deleteReview}
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
