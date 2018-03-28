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
		console.log(props)
	}

	componentDidMount() {
		console.log('message-list => componentDidMount:', this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('message-list => componentWillReceiveProps:', nextProps);
    }

    shouldComponentUpdate() {
    	console.log('message-list => shouldComponentUpdate:', this.state);
    	return true;
    }    

	render() {
		var body = this.state.messages.length ? 
			this.state.messages.map((item) => (
				<Message
					key={item.id}
					text={item.body}
					title={item.title}
					user={item.userId}
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