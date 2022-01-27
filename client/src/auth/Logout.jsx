import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AxiosRequest from '../services/AxiosRequest';

export default function Logout() {
	const history = useHistory();

	useEffect(() => {
		const response = AxiosRequest.post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		AxiosRequest.defaults.headers['Authorization'] = null;
		history.push('/login');
	});
	return <div>Logout</div>;
}
