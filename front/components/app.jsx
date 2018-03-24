import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import api from '../api/api';
import config from '../../utils/config.json';

// Components
import Header from './header.jsx';
import MessagesList from './messages-list.jsx';
import Registration from './registration.jsx';

const history = createBrowserHistory();

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			messages:[],
			username: null
		}
	}

	componentDidMount() {
		api.getCollection(config.client.messagesApiPrefix)
			.then(res => {
				if (res.data) this.setState({ messages:res.data });
			});
	}

	render() {
		return (
			<div className="main-wrapper">
				<Router history={history}>
					<div>
						<Link to="/"><input className="btn btn-primary mx-md-5" type="button" value="HOME"></input></Link>
						<Link to="/login"><input className="btn btn-primary mx-md-5" type="button" value="LOGIN"></input></Link>
						<Link to="/register"><input className="btn btn-primary mx-md-5" type="button" value="REGISTER"></input></Link>
						<hr/>
						<Header />
						<hr/>
						<Route exact path="/">
							<div className="messages-wrapper">
								<MessagesList user={this.state.username} messages={this.state.messages} />
							</div>
						</Route>
						<Route path="/register" component={Registration} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;