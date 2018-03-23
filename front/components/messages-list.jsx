import React, { Component } from 'react';
import axios from 'axios';

// Components
import Message from './message.jsx';

class MessagesList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			messages: [],
			users: []
		}
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				if (res.data) this.setState({ messages:res.data });
			});
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => {
				if (res.data) this.setState({ users:res.data });
			});
	}

	getUserById(id) {
		var users = this.state.users;
		for (let i=0; i<users.length; i++)
			if (users[i].id == id)
				return users[i].name;
		return "n/a";
	}

	render() {
		var body = this.state.messages.map((item, indx) => (
			<Message
				key={item.id}
				text={item.body}
				title={item.title}
				user={this.getUserById(item.userId)}
			>
			</Message>
		)); 
		return (
			<div className='messages-list-wrapper'>
				{body}
			</div>
		);
	}
}

export default MessagesList;