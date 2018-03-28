import React from 'react';

const Message = (props) => {
	const messageClassName = 'message-wrapper' + (props.user == props.username ? ' message-own' : '');

	return (
		<div className={messageClassName}>
			<div className='message-creator'> Created by: {props.user}</div>
			<div className='message-text'> {props.text} </div>
		</div>
	);
}

export default Message;