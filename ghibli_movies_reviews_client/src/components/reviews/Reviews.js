import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from './Review'


class Reviews extends Component {



    // async componentDidMount(){
    //   this.props.getReviews()
    // }


    render() {
  
      const { reviews, movieID, deleteReview } = this.props;

      console.log(this.props.reviews)


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
// this.props.reviews

// const mapDispatchToProps = dispatch => ({
//   getReviews: () => dispatch({type: 'GET_REVIEWS'})
// })

export default connect(mapStateToProps)(Reviews)
