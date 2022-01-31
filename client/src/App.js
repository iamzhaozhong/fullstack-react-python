import { useState, useEffect } from 'react';
import PostLoadingComponent from './Pages/PostPage/PostLoading';
import AllPosts from './Pages/AllPosts';
import axiosInstance from './Services/AxiosConfig';
import Nav from './Components/Nav';

export default function App() {
	const PostLoading = PostLoadingComponent(AllPosts);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		axiosInstance
			.get(
				'https://zz-cors.herokuapp.com/https://cryptic-headland-38418.herokuapp.com/api'
			)
			.then((res) => {
				const allPosts = res.data;
				setAppState({ loading: false, posts: allPosts });
			});
	}, [setAppState]);
	return (
		<div className='App'>
			<Nav />
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
