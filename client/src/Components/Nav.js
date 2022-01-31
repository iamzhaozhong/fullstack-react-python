import styled from 'styled-components';
import { DarkTheme } from '../Assets/Theme';
import { NavLink } from 'react-router-dom';

const Home = styled.h2`
	display: ;
	color: ${(props) =>
		props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
	font-family: 'Fino Sans', sans-serif;
	position: fixed;
	left: 2rem;
	top: 2rem;
	z-index: 3;
	width: 90vw;
`;

const Add = styled.h2`
	display: inline-block;
	color: ${(props) =>
		props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
	font-family: 'Fino Sans', sans-serif;
	position: fixed;
	right: 8rem;
	top: 2rem;
	z-index: 3;
`;

const Logout = styled.h2`
	display: inline-block;
	color: ${(props) =>
		props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
	font-family: 'Fino Sans', sans-serif;
	position: fixed;
	right: 2rem;
	top: 2rem;
	z-index: 3;
`;

export default function Nav(props) {
	return (
		<>
			<NavLink exact to='/home'>
				<Home color={props.theme}>Home</Home>
			</NavLink>
			<NavLink exact to='/admin/create'>
				<Add color={props.theme}>Add</Add>
			</NavLink>
			<NavLink exact to='/logout'>
				<Logout color={props.theme}>Logout</Logout>
			</NavLink>
		</>
	);
}
