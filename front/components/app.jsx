import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import axios from 'axios';

// Components
import Header from './header.jsx';
import MessagesList from './messages-list.jsx';

const history = createBrowserHistory();

class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='main-wrapper'>
				<Router history={history}>
					<div>
						<Link to="/"><input className="btn btn-primary col-md" type="button" value="HOME"></input></Link>
						<Link to="/login">LOGIN</Link>
						<hr/>
						<Route exact path="/" component={Header} />
						<Route path="/login" component={MessagesList} />
					</div>
				</Router>
				<hr/>
				<Header />
				<MessagesList elements={[3,5,6,7,8,56,"super element"]} />
			</div>
		);
	}
}

export default App;