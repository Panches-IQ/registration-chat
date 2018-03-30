import React, { Component } from 'react';
import Validate from '../../utils/validate';

// Components
import CredentialInput from './credential-input.jsx';

const getInitialState = () => {
    return {
        username: '',
        email: '',
        password: '',
        password_confirm: '',
        errors: {},
        success: false
    }
}

class Registration extends Component {

	constructor(props) {
		super(props);

		this.state = getInitialState();

        this.onChange = this.onChange.bind(this);
        this.register = this.register.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

    render() {

    	const { success } = this.state;

        const body = success 
        	? (
        		<div className='registered'>
        			<div>
        				You have succesfully resistered...
        			</div>
        			<div>
        				Please use your login and password to enter the chat messenger...
        			</div>
        		</div>
        	)
        	: (
            <div className='from-group registration-form'>
                <form onSubmit={this.handleSubmit} name='post'>
                    <CredentialInput 
                        type='text'
                        label='username'
                        name='username'
                        placeholder='username'
                        error={this.state.errors.username}
                        onChange={this.onChange}
                        value={this.state.username}
                    />
                    <CredentialInput 
                        type='text'
                        label='email'
                        name='email'
                        placeholder='email'
                        error={this.state.errors.email}
                        onChange={this.onChange}
                        value={this.state.email}
                    />
                    <CredentialInput 
                        type='password'
                        name='password'
                        label='password'
                        placeholder='password'
                        error={this.state.errors.password}
                        onChange={this.onChange}
                        value={this.state.password}
                    />
                    <CredentialInput 
                        type='password'
                        name='password_confirm'
                        label='confirm password'
                        placeholder='confirm password'
                        error={this.state.errors.password_confirm}
                        onChange={this.onChange}
                        value={this.state.password_confirm}
                    />
                    <input className='btn btn-outline-primary' type='submit' value='Register' />
                </form>
            </div>
        )
        return (
            <div className='registration-wrapper'>
                { body }
            </div>
        );
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    register() {
        const { username, password, email } = this.state;
        const { history } = this.props;

        const callback = (response) => {
        	if (response.status === 200) {
        		this.setState({ success:true });
        		setTimeout(() => {history.push('/login')}, 3000);
        	}
        }

        this.props.register(username, password, email, callback);
    }

    handleSubmit(e) {
        e.preventDefault();


        const errors = Validate(this.state);

        if (errors) {
        	this.setState({ errors });
        } else {
        	this.register();
        	this.setState(getInitialState());
        }

    }
}

export default Registration;