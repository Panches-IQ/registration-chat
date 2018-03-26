import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('login => componentDidMount:', this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('login => componentWillReceiveProps:', nextProps);
    }

    render() {
        return (
            <div className=''>
                Login
            </div>
        );
    }
}

export default Login;