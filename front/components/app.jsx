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

// Controllers
import dataStore from '../controllers/data-store';
import dataActions from '../controllers/data-actions';

const history = createBrowserHistory();

const getStateFromFlux = function() {
	return {
		username: dataStore.getUsername(),
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
		return (
			<div className="main-container">
				<Router history={history}>
					<div>
						<NavBar username={this.state.username} />
						<hr/>
						<Header username={this.state.username} />
						<Route exact path='/' render={props => (<MessagesList username={this.state.username} messages={this.state.messages} />)} />
						<Route exact path='/register' render={props => (<Registration username={this.state.username} />)} />
						<Route exact path='/login' render={props => (<Login username={this.state.username} />)} />
						<hr />
						<Route exact path='/' render={props => (<PostMessage username={this.state.username} />)} />
					</div>
				</Router>
			</div>
		);
	}

	_onChange() {		
		this.setState(getStateFromFlux());
	}
}

export default App;