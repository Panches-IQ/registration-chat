import React, { Component } from 'react';

// Components
import Message from './message.jsx';

class MessagesList extends Component {

	constructor(props) {
		super(props);

		this.scrollToBottom = this.scrollToBottom.bind(this);
	}

	render() {
		const body = this.props.messages.length 
			? this.props.messages.map((message) => (
				<Message
					key={ message.id }
					text={ message.text }
					creator={ message.creator }
					username={ this.props.username }
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
				<div 
					style={{ float:"left", clear: "both" }}
		            ref={ (el) => { this.messagesEnd = el; } }
		        >
		        </div>
			</div>
		);
	}

	scrollToBottom(behavior) {
	  	this.messagesEnd.scrollIntoView({ behavior });
	}

	componentDidMount() {
	  	this.scrollToBottom();
	}

	componentDidUpdate() {
	  	this.scrollToBottom('smooth');
	}
}

export default MessagesList;