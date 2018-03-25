import React, { Component } from 'react';

class Message extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		var props = this.props;
		return (
			<div className='jumbotron'>
				<h3 className='display-8'>{props.title}</h3>
				<div> Created by: {props.user}</div>
				<div className='list-group-item'> {props.text} </div>
			</div>
		);
	}
}

export default Message;