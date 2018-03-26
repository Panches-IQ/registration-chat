import React from 'react';

const Header = (props) => {
	return (
		<div className='header-wrapper'>
			<h2>Messenger chat demo application {props.username ? '. Welcome '+props.username+'!' : ''}</h2>
		</div>
	);
}

export default Header;