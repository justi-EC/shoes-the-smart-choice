import { Menu, GridItem } from './MainPage';
import Item from '../components/Item';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ProductModel } from '../shares/Type';
import styled from 'styled-components';
import Filter from '../components/Filter';
import LoadingSpinner from '../shares/LoadingSpinner';

const ItemAll = () => {
	const { arrProduct } = useSelector((state: RootState) => state.product);
	const isPending = useSelector((state: RootState) => state.product.isPending);

	return (
		<>
			<Menu>
				<span>전체 상품</span>
				<span>{`>`}</span>
			</Menu>
			<Container>
				<Filter />
				{!isPending && (
					<GridItemAll>
						{arrProduct.map((item: ProductModel, index: number) => (
							<Item product={item} />
						))}
					</GridItemAll>
				)}
				{isPending && <LoadingSpinner />}
			</Container>
		</>
	);
};

export default ItemAll;

const Container = styled.div`
	display: flex;
	margin-top: 4rem;
`;

export const GridItemAll = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-content: center;
	align-items: center;
	width: 70%;
	margin: 0 auto;
	margin-left: 3rem;

	.swiper-wrapper,
	.swiper-slide {
		width: 400px;
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
