import styled from 'styled-components';

const cardWidth = 400;
const borderRadius = 0;
const transition = 'all 0.45s ease';

const Screenshot = styled.figure`
	z-index: 200;
	position: relative;
	margin: 0;
	padding: 0;
	width: ${cardWidth}px;
	height: 233px;
	background: url(${(props) => props.image}) 0 0 no-repeat;
	background-size: cover;
	border-radius: ${borderRadius}px ${borderRadius}px 0 0;
	overflow: hidden;
	backface-visibility: hidden;
	transition: ${transition};

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0);
		transition: ${transition};
	}
`;

const Content = styled.div`
	z-index: 200;
	position: relative;
	padding: 20px 20px 30px;
`;

const Title = styled.span`
	display: block;
	margin-bottom: 4px;
	font-size: 1.25em;
	font-weight: 500;
	transition: ${transition};
`;

const Description = styled.span`
	display: block;
	font-size: 0.875em;
	color: #999999;
	transition: ${transition};
	transition-delay: 0.04s;
`;

const BottomBar = styled.span`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 3px;
	background: ${(props) => props.background && props.background};
	border-radius: 0 0 ${borderRadius}px ${borderRadius}px;
	transition: ${transition};
`;

const Style = styled.button`
	position: relative;
	flex-shrink: 0;
	height: 335px;
	width: ${cardWidth + 15}px;
	text-align: left;
	background: #ffffff;
	border-radius: ${borderRadius}px;
	cursor: pointer;
	margin: 20px auto;
	box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12),
		0 20px 20px -10px rgba(0, 0, 0, 0.125);
	transition: ${transition};

	&:hover {
		transform: scale(1.04);

		${Title},
		${Description},
    ${BottomBar} {
			transform: scale(0.92);
		}

		${Title} {
			transform: translateY(-10px);
		}

		${Description} {
			transform: translateY(-12px);
		}

		${BottomBar} {
			border-radius: ${borderRadius - 2}px;
			transform: translateY(-14px) scale(0.9);
		}

		${Screenshot} {
			transform: translateY(4px) scale(0.92);
			border-radius: ${borderRadius - 2}px;

			&::before {
				background: rgba(0, 0, 0, 0.1);
			}
		}
	}
`;

export default function Card(props) {
	return (
		<>
			<Style>
				<Screenshot image={'https://source.unsplash.com/random'} />
				<Content>
					<Title>{props.title}</Title>
					<Description>{props.title}</Description>
					<BottomBar background={props.hexa} />
				</Content>
			</Style>
		</>
	);
}
