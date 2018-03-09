import React, { Component } from 'react';
import Header from './header.jsx'

class MainApp extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='main-wrapper'>
				<Header />
			</div>
		);
	}
}

export default MainApp;