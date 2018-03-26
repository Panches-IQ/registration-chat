import React, { Component } from 'react';
import dataStore from '../stores/data-store';

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
		console.log(dataStore);
	}

	componentDidMount() {
		dataStore.getMessages()
			.then(resp => {
				this.setState({ messages: resp.data })
			})
			.catch(e => {
				this.setState({ messages: [] })
			})
        console.log('message-list => componentDidMount:', this.state);
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