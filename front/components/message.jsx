import React, { Component } from 'react';

class Message extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		var content = this.props.content ? this.props.content : "n/a";
		return (
			<div className='message-wrapper'>
				<h3>{content}</h3>
			</div>
		);
	}
}

export default Message;