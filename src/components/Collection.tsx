import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
	title: string;
	subtitle: string;
	image: string;
	right?: boolean;
}

interface Right {
	right?: boolean;
}

const CollectionContainer = styled.div<Right>`
	display: flex;
	margin-bottom: -2rem;
	height: 30rem;
	gap: 2rem;
	${({ right }) =>
		right &&
		`
		flex-direction: row-reverse; 
		align-self: flex-end;
		`}
`;

const ImageContainer = styled.div`
	height: 20rem;
	width: 12rem;
	@media (max-width: 768px) {
		width: 10rem;
	}
	@media (min-width: 768px) {
		width: 16rem;
	}
	@media (min-width: 1280px) {
		height: auto;
		width: 20rem;
	}
`;

const InfoContainer = styled.div<Right>`
	display: flex;
	flex-direction: column;
	margin-top: 2.5rem
		${({ right }) =>
			right
				? `
				align-items: flex-end;
				 text-align: right; 
				 `
				: `
				align-items: flex-start;
				text-align: left;
				  `};

	@media (max-width: 768px) {
		margin-left: 9rem;
		margin-right: -1rem;
	}
`;

const Title = styled.h2`
	margin-bottom: -2px;
	font-size: 50px;
	font-weight: bold;
	@media (min-width: 768px) {
		font-size: 3rem;
	}
`;

const Subtitle = styled.h3`
	font-size: 20px;
`;

const ExploreButton = styled.button`
	background-color: black;
	color: white;
	cursor: pointer;
	text-align: center;
	font-size: 20px;
	transition: 0.2s;
	padding: 1rem;
	&:hover {
		transform: scale(1.1);
	}
`;

const Collection = ({ title, subtitle, image, right = false }: Props) => (
	<CollectionContainer right={right}>
		<ImageContainer>
			<img src={image} alt={title} width={400} height={500} />
		</ImageContainer>
		<InfoContainer right={right}>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
			<Link to="/">
				<ExploreButton>
					<span>Explore</span>
				</ExploreButton>
			</Link>
		</InfoContainer>
	</CollectionContainer>
);

export default Collection;
