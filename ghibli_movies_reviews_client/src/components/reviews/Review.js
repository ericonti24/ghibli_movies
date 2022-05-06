import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../../apiRequests/apiCalls';
import './Review.css'


class Review extends Component {

	handleOnClick = event => {
		this.props.deleteReview(this.props.review.id)
		window.location.reload(false)
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
	deleteReview: id => dispatch(deleteReview(id)) 
})

export default connect(null, mapDispatchToProps)(Review)
