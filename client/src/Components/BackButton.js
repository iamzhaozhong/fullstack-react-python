import styled from 'styled-components';
import { DarkTheme } from '../Assets/Theme';
import { NavLink } from 'react-router-dom';

const Back = styled.h2`
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

export default function BackButton(props) {
	return (
		<>
			<NavLink exact to='/'>
				<Back color={props.theme}>BACK</Back>
			</NavLink>
		</>
	);
}
