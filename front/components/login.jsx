import React, { Component } from 'react';

const getInitialState = () => {
    return {
        username_field: '',
        password_field: '',
        username_error: null,
        password_error: null
    }
}

class Login extends Component {

   constructor(props) {
        super(props);

        this.state = getInitialState();

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log('login => componentDidMount:', this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('login => componentWillReceiveProps:', nextProps);
    }

    render() {
        const body = (
            <div className='from-group login-form'>
                <form onSubmit={this.handleSubmit} name='post'>
                    <label for="username">Username:</label><br />
                    <input id="username" type="text" name='username' value={this.state.username_field} onChange={this.handleUsername} />
                    <br />
                    <label for="password1">Password:</label><br />
                    <input id="password1" type="password" name='password' value={this.state.password_field} onChange={this.handlePassword} />
                    <br />
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

    handleUsername(e) {
        this.setState({ username_field: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password_field: e.target.value });
    }

    handleSubmit(e) {
        if (this.checkCredentials())
            this.setState(getInitialState());
        e.preventDefault();
    }
}

export default Login;