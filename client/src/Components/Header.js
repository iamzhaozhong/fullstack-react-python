import styled from 'styled-components';
import { DarkTheme } from '../Assets/Theme';
import { NavLink } from 'react-router-dom';

const Logo = styled.h2`
	display: inline-block;
	color: ${(props) =>
		props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
	font-family: 'Fino Sans', sans-serif;
	position: fixed;
	left: 2rem;
	top: 2rem;
	z-index: 3;
`;

const Login = styled(NavLink)`
	color: ${(props) =>
		props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
	position: fixed;
	right: 6rem;
	top: 3rem;
	width: 12%;
	font-family: 'Fino Sans', sans-serif;
	font-size: 20px;
	display: flex;
	justify-content: space-evenly;
	z-index: 3;
	text-decoration: none;
	color: inherit;
`;
const Logout = styled(NavLink)`
	color: ${(props) =>
		props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
	position: fixed;
	right: 2rem;
	top: 3rem;
	width: 12%;
	font-family: 'Fino Sans', sans-serif;
	font-size: 20px;
	display: flex;
	justify-content: space-evenly;
	z-index: 3;
	text-decoration: none;
	color: inherit;
`;
const Register = styled(NavLink)`
	color: ${(props) =>
		props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
	position: fixed;
	right: 10rem;
	top: 3rem;
	width: 12%;
	font-family: 'Fino Sans', sans-serif;
	font-size: 20px;
	display: flex;
	justify-content: space-evenly;
	z-index: 3;
	text-decoration: none;
	color: inherit;
`;

export default function Header(props) {
	return (
		<>
			<Logo color={props.theme}>VelvetWorms</Logo>
			<Login to='/login'>Login</Login>
			<Logout to='/logout'>Logout</Logout>
			<Register to='/register'>Register</Register>
		</>
	);
}
