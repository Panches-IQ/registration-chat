import React, { Component } from 'react';
import Validate from '../../utils/validate';

// Components
import CredentialInput from './credential-input.jsx';

const getInitialState = () => {
    return {
        username: '',
        password: '',
        errors: {}
    }
}

class Login extends Component {

   constructor(props) {
        super(props);

        this.state = getInitialState();

        this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // console.log('login => componentDidMount:', this.props);
    }

    componentWillReceiveProps(nextProps) {
        // console.log('login => componentWillReceiveProps:', nextProps);
    }

    render() {
        const body = (
            <div className='from-group login-form'>
                <form onSubmit={this.handleSubmit} name='post'>
                    <CredentialInput 
                        type='text'
                        label='username / email'
                        name='username'
                        placeholder='username or e-mail'
                        error={this.state.errors.username}
                        onChange={this.onChange}
                        value={this.state.username}
                    />
                    <CredentialInput 
                        type='password'
                        name='password'
                        label='password'
                        placeholder='password here'
                        error={this.state.errors.password}
                        onChange={this.onChange}
                        value={this.state.password}
                    />
                    <input className='btn btn-outline-primary' type='submit' value='Login' />
                </form>
            </div>
        )
        return (
            <div className='login-wrapper'>
                { body }
            </div>
        );
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login() {
        const { username, password } = this.state;
        const { history } = this.props;
        this.props.login(username, password, history);
    }

    handleSubmit(e) {
        e.preventDefault();

        const errors = Validate(this.state);

        if (errors) {
            this.setState({ errors });
        } else {
            this.login();
            this.setState(getInitialState());
        }
    }
}

export default Login;