import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login';
import Logout from './Authentication/Logout';
import Register from './Authentication/Register';
import Home from './Pages/Home';
import PostDetail from './Pages/PostDetail';
import Create from './Pages/Create';
import About from './Pages/About';
import { AnimatePresence } from 'framer-motion';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AnimatePresence exitBeforeEnter>
				<Routes>
					<Route exact path='/' element={<App />} />
					<Route exact path='/home' element={<Home />} />
					<Route exact path='/about' element={<About />} />
					<Route exact path='/admin/create' element={<Create />} />
					<Route exact path='/post/:slug' element={<PostDetail />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/register' element={<Register />} />
					<Route exact path='/logout' element={<Logout />} />
				</Routes>
			</AnimatePresence>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
