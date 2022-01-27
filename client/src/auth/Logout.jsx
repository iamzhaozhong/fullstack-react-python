import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AxiosRequest from '../services/AxiosRequest';

export default function Logout() {
	const navigate = useNavigate();

	useEffect(() => {
		const response = AxiosRequest.post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		AxiosRequest.defaults.headers['Authorization'] = null;
		navigate.push('/login');
	});
	return <div>Logout</div>;
}
