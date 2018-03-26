import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const active = 'nav-active';

const Navbar = (props) => {
	const username = props.username;
	const registerField = username 
		? (
			<Link className={active + ' user-field'} to={'/userinfo?username='+username}>
				{ username }
			</Link>
		)
		: (
			<NavLink exact activeClassName={active} to={'/register'}>
				REGISTER
			</NavLink>
		);
	const registerClassname = username ? 'nav-right-align' : '';
	
	return (
		<div className='nav-wrapper'>
			<ul className='nav'>
				<li>
					<NavLink exact activeClassName={active} to='/'>
						HOME
					</NavLink>
				</li>
				<li>
					<NavLink exact activeClassName={active} to={username ? '/logout' : '/login'}>
						{username ? 'LOGOUT' : 'LOGIN'}
					</NavLink>
				</li>
				<li className={registerClassname}>
					{registerField}
				</li>
			</ul>
		</div>
	);
};

export default Navbar;