import styled from 'styled-components';
import Collection from './Collection';
import nikeImage from '../img/nike.jpg';
import adidasImage from '../img/adidas.jpg';
import vansImage from '../img/vans.jpg';
import converseImage from '../img/converse.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { brandActions } from '../store/brandSlice';
import { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { Brand } from '../shares/Enums';

const CollectionList = () => {
	const { arrProduct } = useSelector((state: RootState) => state.product);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleCollectionClick = (brandName: string) => {
		dispatch(
			brandActions.filteredBrand({
				brandName: brandName,
				allProducts: arrProduct,
			})
		);
		navigate('/itemall');
	};

	return (
		<Container>
			<FlexContainer>
				<CollectionWrapper>
					<Collection
						title="NIKE"
						subtitle="나이키"
						image={nikeImage}
						handleClick={() => handleCollectionClick(Brand.Nike)}
					/>
					<Collection
						title="ADIDAS"
						subtitle="아디다스"
						image={adidasImage}
						right
						handleClick={() => handleCollectionClick(Brand.Adidas)}
					/>
				</CollectionWrapper>

				<CollectionWrapper>
					<Collection
						title="VANS"
						subtitle="반스"
						image={vansImage}
						handleClick={() => handleCollectionClick(Brand.Vans)}
					/>
					<Collection
						title="CONVERSE"
						subtitle="컨버스"
						image={converseImage}
						right
						handleClick={() => handleCollectionClick(Brand.Converse)}
					/>
				</CollectionWrapper>
			</FlexContainer>
		</Container>
	);
};

export default CollectionList;

const Container = styled.div`
	padding-top: 7rem;
	padding-bottom: 7rem;
`;

const FlexContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	@media (max-width: 768px) {
		width: 75%;
	}
	@media (min-width: 768px) {
		padding-left: 4rem;
		padding-right: 4rem;
	}
	@media (min-width: 1024px) {
		padding-left: 0px;
		padding-right: 0px;
	}
`;

const CollectionWrapper = styled.div`
	width: 100%;
	@media (max-width: 768px) {
		width: 20rem;
	}
	@media (min-width: 1024px) {
		width: 40rem;
	}
	@media (min-width: 1280px) {
		width: 50rem;
	}
`;
