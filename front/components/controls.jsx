import React, { Component } from 'react';

class Controls extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='controls-wrapper'>
				<input type='button' value='Login' />
			</div>
		);
	}
}

export default Controls;