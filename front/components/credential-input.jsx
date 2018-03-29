import React, { Component } from 'react';

const CredentialInput = (props) => {
	
	const { name, type, onChange, label, error, value, placeholder } = props;
	const warnMessage = error 
		? (<div className='input-warning'>{error}</div>)
		: null;

	return (
		<div className={error ? 'input-warning' : 'input-ok'}>
			<div>
				{label}
			</div>
			<input
				type={type}
				name={name}
				onChange={onChange}
				value={value}
				placeholder={placeholder}
			/>
			{warnMessage}
		</div>
	)
}

export default CredentialInput;