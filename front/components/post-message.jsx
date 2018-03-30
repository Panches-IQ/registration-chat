import React, { Component } from 'react';

class PostMessage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ''
        }

        this.handleTextarea = this.handleTextarea.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {

        const { username } = this.props;

        const body = username 
            ? (
                <div className='post-message-registered'>
                    <form onSubmit={this.handleSubmit} name='post'>
                        <textarea name='message' value={this.state.message} onChange={this.handleTextarea} />
                        <input className='btn btn-outline-primary' type='submit' value='Publish' />
                    </form>
                </div>
            )
            : (
                <div className='post-message-unregistered'>
                    Please login or register to start typing your messages...
                </div>
            )
        return (
            <div className='post-message-wrapper'>
                { body }
            </div>
        );
    }

    handleTextarea(e) {
        this.setState({ message: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { message } = this.state;

        this.props.postMessage(message);
        this.setState({ message: '' });        
    }
}

export default PostMessage;