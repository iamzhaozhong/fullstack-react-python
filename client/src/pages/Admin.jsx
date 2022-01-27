import { useEffect, useState } from 'react';
import Posts from './components/admin/posts';
import PostLoadingComponent from './components/posts/postLoading';
import AxiosRequest from '../services/AxiosRequest';

function Admin() {
    const PostLoading = PostLoadingComponent(Posts);
    const [appState, setAppState] = useState({
        loading: true,
        posts: null,
    });

    useEffect(() => {
        AxiosRequest.get().then((res) => {
            const allPosts = res.data;
            setAppState({ loading: false, posts: allPosts });
            console.log(res.data);
        });
    }, [setAppState]);

    return (
        <div className="App">
            <h1>Latest Posts</h1>
            <PostLoading isLoading={appState.loading} posts={appState.posts} />
        </div>
    );
}
export default Admin;
