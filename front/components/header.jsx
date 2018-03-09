import React, { Component } from 'react';

class Header extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='header-wrapper'>
				<h2>Messenger chat demo application</h2>
			</div>
		);
	}
}

export default Header;