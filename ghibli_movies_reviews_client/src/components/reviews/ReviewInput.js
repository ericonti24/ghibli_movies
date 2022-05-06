import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postReview } from '../../apiRequests/apiCalls'
class ReviewInput extends Component {

    constructor(props) {
        super(props);
        this.state={text:''}
    }


    handleOnChange = event => {
        this.setState({
            text: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
				const payload = JSON.stringify({
					review:{
						content: this.state.text,
						movieID: this.props.movieID
					}
				})
				postReview(this.props.dispatch, payload)
        this.setState({
            text: '',
        })
        window.location.reload(false)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label style={{fontSize: 20}}>Add Review </label>
                    <br></br>
                    <textarea type="text" value={this.state.text} style={{width: 350, height: 70, resize: 'none'}} onChange={this.handleOnChange} />
                    <br></br>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}


export default connect(null, null)(ReviewInput)