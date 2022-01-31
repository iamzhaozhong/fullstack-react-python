import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../Components/Card';

const Page = styled.div`
	posistion: relative;
	padding-top: 50px auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: -webkit-fill-available; /* mobile viewport bug fix */
	scroll-behavior: smooth;
`;

const Grid = styled.div`
	display: flex;
	flex-direction: row;
	margin: 8%;
	justify-content: space-around;
	flex-wrap: wrap;
`;

export default function AllPosts({ posts }) {
	return (
		<Page>
			<Grid>
				{posts.map((post) => (
					<NavLink exact to={`post/${post.slug}`}>
						<Card
							id={post.id}
							key={post.slug}
							hexa={'#000000'}
							title={post.title}
							description={post.excerpt}
							image={''}
						/>
					</NavLink>
				))}
			</Grid>
		</Page>
	);
}
