import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Review.css'
class Review extends Component {
	handleOnClick = () => {
			this.props.deleteReview(this.props.review.id)
	}

	render() {
			return (
					<div>
							<li>
									{this.props.review.content}
							</li>
							<button onClick={this.handleOnClick}>Delete</button>
					</div>
			)
	}
}



const mapDispatchToProps = dispatch => ({
    deleteReview: id => dispatch({type: 'DELETE_REVIEW', id}) 
})

export default connect(null, mapDispatchToProps)(Review)
