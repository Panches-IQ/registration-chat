import React, { Component } from 'react';

class Header extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='navbar-nav navbar-text'>
				<h2>Messenger chat demo application!</h2>
			</div>
		);
	}
}

export default Header;