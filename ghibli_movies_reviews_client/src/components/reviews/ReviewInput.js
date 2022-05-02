import React, { Component } from 'react'

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
        console.log('WTF', this.props.movieID)
        this.props.addReview({text: this.state.text, movieID: this.props.movieID})
        this.setState({
            text: '',
        })
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

export default ReviewInput