import React, { Component } from 'react';

class Message extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		var props = this.props;
		return (
			<div className='message-wrapper'>
				<h3>{props.title}</h3>
				<div> Created by: {props.user}</div>
				<div> {props.text} </div>
			</div>
		);
	}
}

export default Message;