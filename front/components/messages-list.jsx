import React, { Component } from 'react';

// Components
import Message from './message.jsx';

class MessagesList extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}

	}

	componentDidMount() {

	}

	render() {
		var body = this.props.messages ? 
			this.props.messages.map((item) => (
				<Message
					key={item.id}
					text={item.body}
					title={item.title}
					user={item.user}
				>
				</Message>
			))
			: "Start typing your messages";
		return (
			<div className="container">
				{body}
			</div>
		);
	}
}

export default MessagesList;