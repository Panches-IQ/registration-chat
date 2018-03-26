import React, { Component } from 'react';

class Registration extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
        console.log('registration => componentDidMount:', this.props);
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