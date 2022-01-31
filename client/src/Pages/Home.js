import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Intro from '../Assets/Intro';
import Header from '../Components/Header';
import LeftSide from '../Components/LeftSide';
import RightSide from '../Components/RightSide';

const MainContainer = styled.div`
	background: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	position: relative;
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Fino Sans', sans-serif;
		font-weight: 800;
	}
`;

const Container = styled.div`
	padding: 2rem;
`;

const ABOUT = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	position: absolute;
	top: 50%;
	left: calc(1rem + 2vw);
	transform: translate(-50%, -50%) rotate(-90deg);
	text-decoration: none;
	z-index: 1;
	color: inherit;
`;
const BLOG = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	position: absolute;
	top: 50%;
	right: calc(1rem + 2vw);
	transform: rotate(90deg) translate(-50%, -50%);
	text-decoration: none;
	z-index: 1;
	color: inherit;
`;

const DarkDiv = styled.div`
	position: absolute;
	top: 0;
	background-color: #000;
	bottom: 0;
	right: 50%;
	width: ${(props) => (props.click ? '50%' : '0%')};
	height: ${(props) => (props.click ? '100%' : '0%')};
	z-index: 1;
	transition: height 0.5s ease, width 1s ease 0.5s;
`;

const ContactFooter = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 0;
	right: 0;
	width: 100%;

	display: flex;
	justify-content: space-evenly;
`;

export default function Home() {
	return (
		<>
			<MainContainer>
				<DarkDiv />
				<Container>
					<Header />
					<LeftSide />
					<ABOUT to='/about'>
						<motion.h2
							initial={{
								y: -200,
								transition: { type: 'spring', duration: 1.5, delay: 1 },
							}}
							animate={{
								y: 0,
								transition: { type: 'spring', duration: 1.5, delay: 1 },
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}>
							ABOUT
						</motion.h2>
					</ABOUT>
					<RightSide />
					<BLOG to='/'>
						<motion.h2
							initial={{
								y: -200,
								transition: { type: 'spring', duration: 1.5, delay: 1 },
							}}
							animate={{
								y: 0,
								transition: { type: 'spring', duration: 1.5, delay: 1 },
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}>
							BLOG
						</motion.h2>
					</BLOG>
				</Container>
				<Intro />
				<ContactFooter to='/contact'>
					<motion.h3
						initial={{
							y: 200,
							transition: { type: 'spring', duration: 1.5, delay: 1 },
						}}
						animate={{
							y: 0,
							transition: { type: 'spring', duration: 1.5, delay: 1 },
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}>
						Contact
					</motion.h3>
				</ContactFooter>
			</MainContainer>
		</>
	);
}
