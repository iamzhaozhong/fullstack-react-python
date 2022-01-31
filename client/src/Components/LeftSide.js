import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Twitter } from '../Assets/PullSvg';
import { DarkTheme } from '../Assets/Theme';

const LeftSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	position: fixed;
	bottom: 0;
	left: 2rem;

	z-index: 3;

	& > *:not(:last-child) {
		margin: 0.5rem 0;
	}
`;

const LeftLine = styled(motion.span)`
	width: 2px;
	height: 8rem;
	background-color: ${(props) =>
		props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`;

export default function LeftSide(props) {
	return (
		<LeftSection>
			<motion.div
				initial={{ transform: 'scale(0)' }}
				animate={{ scale: [0, 1, 1.5, 1] }}
				transition={{ type: 'spring', duration: 1, delay: 1.2 }}>
				<NavLink
					style={{ color: 'inherit' }}
					to={ { pathname: 'https://linkedin.com/junzhaozhongliu' } }
					target='_blank'
					>
					<Twitter
						width={25}
						height={25}
						fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
					/>
				</NavLink>
			</motion.div>
			<LeftLine
				color={props.theme}
				initial={{
					height: 0,
				}}
				animate={{
					height: '8rem',
				}}
				transition={{
					type: 'spring',
					duration: 1,
					delay: 0.8,
				}}
			/>
		</LeftSection>
	);
}
