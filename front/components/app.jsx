import React, { Component } from 'react';
import Header from './header.jsx';
import MessagesList from './messages-list.jsx';

class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='main-wrapper'>
				<Header />
				<MessagesList elements={[3,5,6,7,8,56,"super element"]} />
			</div>
		);
	}
}

export default App;