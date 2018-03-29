import React, { Component } from 'react';

// Components
import CredentialInput from './credential-input.jsx';

const getInitialState = () => {
    return {
        username: '',
        email: '',
        password: '',
        password_confirm: '',
        error: {
            username: null,
            password: null,
            password_confirm: null
        }
    }
}

class Registration extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
        console.log('registration => componentDidMount:', this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('registration => componentWillReceiveProps:', nextProps);
    }


	render() {
		return (
			<div className=''>
				Registration
			</div>
		);
	}
}

export default Registration;