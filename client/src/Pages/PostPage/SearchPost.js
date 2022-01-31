import { useEffect, useState } from 'react';
import AxiosRequest from './AxiosRequest';

export default function SearchPost() {
	const search = 'search';
	const [appState, setAppState] = useState({
		search: '',
		posts: [],
	});

	useEffect(() => {
		AxiosRequest.get(search + '/' + window.location.search).then((res) => {
			const allPosts = res.data;
			setAppState({ posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);
}
