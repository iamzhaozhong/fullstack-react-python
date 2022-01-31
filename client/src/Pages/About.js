import styled from 'styled-components';
import Header from '../Components/Header';

const Wrapper = styled.div`
	.split {
		height: 100%;
		width: 50%;
		position: fixed;
		z-index: 1;
		top: 0;
		overflow-x: hidden;
		padding-top: 20px;
	}

	.left {
		left: 0;
		font-family: 'Fino Sans', sans-serif;
		font-weight: 800;
		h3 {
			font-family: 'Raleway';
		}
	}

	.right {
		right: 0;
	}

	.centered {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
	.centered-left {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
`;

const Image = styled.img`
	height: 600px;
	width: 800px;
	object-fit: fill;
`;

export default function About() {
	return (
		<>
			<Header />
			<Wrapper>
				<div class='split left'>
					<div class='centered-left'>
						<h1>About</h1>
						<h3>
							Onychophora, commonly known as velvet worms (due to their velvety
							texture and somewhat wormlike appearance) or more ambiguously as
							peripatus, is a phylum of elongate, soft-bodied, many-legged
							panarthropods.In appearance they have variously been compared to
							worms with legs, caterpillars, and slugs. They prey upon smaller
							animals such as insects, which they catch by squirting an adhesive
							slime.
						</h3>
					</div>
				</div>
				<div class='split right'>
					<div class='centered'>
						<Image src='https://raw.githubusercontent.com/iamzhaozhong/fullstack-react-python/main/assets/about.svg' />
					</div>
				</div>
			</Wrapper>
		</>
	);
}
