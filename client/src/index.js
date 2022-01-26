import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { Route, BrowserRouter as Router, Routs } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import login from 'components/Login';

const routing = (
	<Router>
		<React.StrictMode>
			<Header />
			<Routs>
				<Route exact path='/' component={App} />
				<Route path='/register' component={Register} />
				<Route path='/login' component={Login} />
				<Route path='/logout' component={Logout} />
			</Routs>
			<Footer />
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
