import { useState, useEffect } from 'react';
import PostLoadingComponent from './PostLoading';
import PostRender from './RenderPosts';
import AxiosConfig from '../../Services/AxiosConfig';

export default function PostMain() {
	const PostLoading = PostLoadingComponent(PostRender);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		AxiosConfig.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);
	return (
		<div className='App'>
			<h1>Latest Posts</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
