import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../Services/AxiosConfig';

export default function IndividualPost() {
	const { slug } = useParams();
	const [data, setData] = useState({ posts: [] });

	useEffect(() => {
		axiosInstance.get(slug).then((res) => {
			setData({ posts: res.data });
		});
	}, [setData]);

	return (
		<div>
			<h1>{data.posts.title}</h1>
			<h2>{data.posts.excerpt}</h2>
			<h3>{data.posts.published}</h3>
			<p>{data.posts.content}</p>
		</div>
	);
}
