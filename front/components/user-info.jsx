import React, { Component } from 'react';

class UserInfo extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { username } = this.props;

        return (
            <div className='user-info'>
                {username}
            </div>
        )
    }

}

export default UserInfo;