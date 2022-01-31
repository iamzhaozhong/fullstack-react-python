import React,  { useEffect, useState } from 'react';
import GetPosts from '../utility/GetPosts';
import PostLoadingComponent from '../utility/PostLoading';
import AxiosRequest from '../services/AxiosRequest';

function Admin() {
    const PostLoading = PostLoadingComponent(GetPosts);
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
