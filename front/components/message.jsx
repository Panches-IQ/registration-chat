import React from 'react';

const Message = (props) => {
	const messageClassName = 'message-wrapper' + (props.creator == props.username ? ' message-own' : '');

	return (
		<div className={messageClassName}>
			<div className='message-creator'>{props.creator}</div>
			<div className='message-text'> {props.text} </div>
		</div>
	);
}

export default Message;