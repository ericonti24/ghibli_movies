import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from './Review'
import {fetchReviews} from '../../apiRequests/apiCalls'


class Reviews extends Component {
    componentDidMount(){
      if (!this.props.reviews.length){
        fetchReviews(this.props.dispatch)
      }
    }

    render() {
      const { reviews, movieID, deleteReview } = this.props;

      // HELLOOO

      let relatedReviews
      let reviewList
      if(reviews && reviews.length > 0){
        relatedReviews = reviews.filter(review => review.movieID === movieID);

        reviewList = relatedReviews.map((review, index) => {
          return <Review key={index} review={review} deleteReview={deleteReview} />
        })
      }
      
      return (
        <div>
          <ul>
            {reviewList}
          </ul>
        </div>
      );
    }
  
  };

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  };
};

export default connect(mapStateToProps)(Reviews)
