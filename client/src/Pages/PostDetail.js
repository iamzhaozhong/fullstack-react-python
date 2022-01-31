import { useState, useEffect } from 'react';
import axiosInstance from '../Services/AxiosConfig';
import { useParams } from 'react-router-dom';
import Nav from '../Components/Nav';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DisplayPost = styled(motion.div)`
	position: absolute;
	left: 50%;
	top: 45%;
	transform: translate(-50%, -50%);
	font-family: 'Fino Sans', sans-serif;
	font-weight: 800;
	p {
		font-family: 'Raleway';
	}
	width: 65vw;
	display: flex;
	flex-direction: column;

	border-bottom: 2px solid ${(props) => props.theme.text};

	background: linear-gradient(
				to right,
				${(props) => props.theme.body} 50%,
				${(props) => props.theme.text} 50%
			)
			bottom,
		linear-gradient(
				to right,
				${(props) => props.theme.body} 50%,
				${(props) => props.theme.text} 50%
			)
			top;
	background-repeat: no-repeat;
	background-size: 100% 2px;

	z-index: 1;
`;
const Image = styled.img`
	display: block;
	margin-left: auto;
	margin-right: auto;
	height: 55%;
	width: 55%;
	object-fit: cover;
`;

export default function PostDetail() {
	const { slug } = useParams();

	const [data, setData] = useState({
		posts: [],
	});

	useEffect(() => {
		axiosInstance.get('post/' + slug).then((res) => {
			setData({
				posts: res.data,
			});
		});
	}, [setData]);

	return (
		<>
			<Nav />
			<DisplayPost
				initial={{ height: 0 }}
				animate={{ height: '70%' }}
				transition={{ type: 'spring', duration: 2, delay: 1 }}>
				<Image src='https://source.unsplash.com/random' />
				<h1>{data.posts.title} </h1>
				<h2>{data.posts.excerpt}</h2>
				<p>{data.posts.content}</p>
			</DisplayPost>
		</>
	);
}
