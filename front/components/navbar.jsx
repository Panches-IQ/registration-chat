import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const active = 'nav-active';

class Navbar extends Component {

	constructor (props) {
		super(props);

		this.state = {
			registered: false
		}
	}	

	render() {
		const logged = this.state.registered;

		return (
			<ul className='nav'>
				<li>
					<NavLink exact activeClassName={active} to='/'>
						HOME
					</NavLink>
				</li>
				<li>
					<NavLink exact activeClassName={active} to={logged ? '/' : '/register'}>
						{logged ? 'Welcome '+this.props.username : 'REGISTER'}
					</NavLink>
				</li>
				<li>
					<NavLink exact activeClassName={active} to={logged ? '/logout' : '/login'}>
						{logged ? 'LOGOUT' : 'LOGIN'}
					</NavLink>
				</li>
			</ul>
		);
	}
};

export default Navbar;