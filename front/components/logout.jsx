import React, { Component } from 'react';

class Logout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            success: true
        }

        this.logout = this.logout.bind(this);

        setTimeout(this.logout, 1000);
    }

    logout() {
        const { username, history } = this.props;

        const callback = (response) => {
            if (response.status === 200) {
                history.push('/');
            } else {
                this.setState({ success:false });
                setTimeout(() => {history.push('/')}, 2000);
            }

        }

        this.props.logout(username, callback);
    }

    render() {
        const { username } = this.props;
        const { success } = this.state;

        const body = success
            ? (
                <div>
                    Logout&nbsp;{username}...
                </div>
            )
            : (
                <div>
                    Something gone wrong, please try again...
                </div>
            );

        return (
            <div className='logout'>
                { body }
            </div>
        )
    }
	
}

export default Logout;