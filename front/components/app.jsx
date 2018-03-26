import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// Components
import NavBar from './navbar.jsx';
import Header from './header.jsx';
import MessagesList from './messages-list.jsx';
import Registration from './registration.jsx';
import Login from './login.jsx';
import PostMessage from './post-message.jsx';

const history = createBrowserHistory();

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			username: null
			// username: 'Pavel'
		}
	}

	render() {
		return (
			<div className="main-container">
				<Router history={history}>
					<div>
						<NavBar username={this.state.username} />
						<hr/>
						<Header username={this.state.username} />
						<Route exact path='/' render={props => (<MessagesList username={this.state.username} />)} />
						<Route exact path='/register' render={props => (<Registration username={this.state.username} />)} />
						<Route exact path='/login' render={props => (<Login username={this.state.username} />)} />
						<hr />
						<Route exact path='/' render={props => (<PostMessage username={this.state.username} />)} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;