import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import io from 'socket.io-client';

// Components
import NavBar from './navbar.jsx';
import Header from './header.jsx';
import MessagesList from './messages-list.jsx';
import Registration from './registration.jsx';
import Login from './login.jsx';
import Logout from './logout.jsx';
import PostMessage from './post-message.jsx';
import UserInfo from './user-info.jsx';

// Controllers
import dataStore from '../controllers/data-store';
import dataActions from '../controllers/data-actions';

const history = createHistory();

const getStateFromFlux = function() {
	return {
		username: dataStore.getUsername(),
		// username: 'Pavel',
		isLoading: dataStore.isLoading(),
		messages: dataStore.getMessages(),
		error: dataStore.getLoadingError()
	}
}

class App extends Component {

	constructor(props) {
		super(props);
		this.state = getStateFromFlux();

		this._onChange = this._onChange.bind(this);
		this._login = this._login.bind(this);
		this._logout = this._logout.bind(this);
		this._register = this._register.bind(this);
		this._postMessage = this._postMessage.bind(this);
	}

	componentWillMount() {
		dataActions.loadMessages();
	}

	componentDidMount() {
		dataStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		dataStore.removeChangeListener(this._onChange);
	}

	render() {

		const { username, messages } = this.state;

		return (
			<div className="main-container">
				<Router history={history}>
					<div>
						<NavBar username={username} />
						<hr/>
						<Header username={username} />
						<Route exact path='/' render={props => (<MessagesList username={username} messages={messages} />)} />
						<Route exact path='/register' render={(props) => (<Registration {...props} username={username} register={this._register} />)} />
						<Route exact path='/logout' render={(props) => (<Logout {...props} username={username} logout={this._logout} />)} />
						<Route exact path='/login' render={(props) => (<Login {...props} username={username} login={this._login} />)} />
						<Route path='/userinfo' render={(props) => (<UserInfo {...props} username={username} />)} />
						<hr />
						<Route exact path='/' render={(props) => (<PostMessage {...props} username={username} postMessage={this._postMessage} />)} />
					</div>
				</Router>
			</div>
		);
	}

	_onChange() {		
		this.setState(getStateFromFlux());
	}

	_logout(...args) {
		dataActions.logout(...args);
	}

	_login(...args) {
		dataActions.login(...args);
	}

	_register(...args) {
		dataActions.register(...args);
	}

	_postMessage(message) {

		const { username } = this.state;

		dataActions.createMessage(message, username);
	}
}

export default App;