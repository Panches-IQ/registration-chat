import React, { Component } from 'react';

// Components
import Message from './message.jsx';

class MessagesList extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			updated: false,
			messages: []
		}
		// console.log(props)
	}

	componentDidMount() {
		// console.warn('message-list => componentDidMount:', this.props);
    }

    componentWillReceiveProps(nextProps) {
        // console.error('message-list => componentWillReceiveProps:', nextProps);
    }

    shouldComponentUpdate() {
    	// console.log('message-list => shouldComponentUpdate:', this.state);
    	return true;
    }    

	render() {
		var body = this.props.messages.length ? 
			this.props.messages.map((message) => (
				<Message
					key={message.id}
					text={message.text}
					user={message.userId}
					username={this.props.username}
				>
				</Message>
			))
			: (
				<div className='messages-list-empty'>
					No messages yet. Start typing your messages
				</div>
			)
		return (
			<div className='messages-list-wrapper'>
				{body}
			</div>
		);
	}
}

export default MessagesList;