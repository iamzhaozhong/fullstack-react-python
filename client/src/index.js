import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import {Routes} from 'react-router'
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';

// import Register from './components/auth/register';
// import Login from './components/auth/login';
// import Logout from './components/auth/logout';
// import Single from './components/posts/single';
// import Search from './components/posts/search';
// import Admin from './Admin';
// import Create from './components/admin/create';
// import Edit from './components/admin/edit';
// import Delete from './components/admin/delete';

const routing = (
	<Router>
		<React.StrictMode>
			<Header />
			<Routes>
				<Route exact path="/" component={App} />
				<Route exact path="/admin" component={Admin} />
				<Route exact path="/admin/create" component={Create} />
				<Route exact path="/admin/edit/:id" component={Edit} />
				<Route exact path="/admin/delete/:id" component={Delete} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
				<Route path="/post/:slug" component={Single} />
				<Route path="/search" component={Search} />
			</Routes>
			<Footer />
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
