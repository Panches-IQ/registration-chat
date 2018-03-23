import React, { Component } from 'react';
import Message from './message.jsx';

class MessagesList extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		var body = this.props.elements 
			? this.props.elements.map((content, indx) => (
					<Message content={content}
						key = {indx}
						className = "messages-wrapper"
					/>
				)) 
			: "No messages yet... Start your first message!"; 
		return (
			<div className='messages-list-wrapper'>
				{body}
			</div>
		);
	}
}

export default MessagesList;