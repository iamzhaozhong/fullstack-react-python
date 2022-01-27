import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import {Routes} from 'react-router'
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './auth/SignUp';
import Login from './auth/Login';
import Logout from './auth/Logout';
import Single from './utility/Single';
import SearchPost from './utility/SearchPost';
import Admin from './components/Admin';
import Create from './crud/Create';
import Edit from './crud/Edit';
import Delete from './crud/Delete';

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
				<Route path="/register" component={Signup} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
				<Route path="/post/:slug" component={Single} />
				<Route path="/search" component={SearchPost} />
			</Routes>
			<Footer />
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));


