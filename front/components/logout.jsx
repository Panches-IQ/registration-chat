import React, { Component } from 'react';

const Logout = (props) => {

	const { username, history } = props;

	setTimeout(() => {props.logout(username, history)}, 750);

	return (
		<div className='logout'>
			Logout...
		</div>
	)
}

export default Logout;