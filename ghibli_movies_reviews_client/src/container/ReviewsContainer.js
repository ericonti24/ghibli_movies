import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {


    render() {
        console.log(this.props)
        return (
            <div>
                <ReviewInput 
                    addReview={this.props.addReview}
                    movieID={this.props.movieID}
                />
                <Reviews
                    reviews={this.props.reviews}
                    movieId={this.props.movieID}
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
