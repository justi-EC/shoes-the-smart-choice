import { Menu, GridItem } from './MainPage';
import Item from '../components/Item';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ProductModel } from '../shares/Types';
import styled from 'styled-components';
import Filter from '../components/Filter';
import LoadingSpinner from '../shares/LoadingSpinner';
import { useEffect, useState } from 'react';
import { Sort } from '../shares/Enums';

const ItemAll = () => {
	const [result, setResult] = useState<ProductModel[]>([]);
	const isPending = useSelector((state: RootState) => state.product.isPending);
	const isRendered = useSelector((state: RootState) => state.brand.isRendered);
	//state
	const sortType = useSelector((state: RootState) => state.sort.sortType);
	//sort
	const { arrProduct } = useSelector((state: RootState) => state.product);
	const filteredBrand = useSelector(
		(state: RootState) => state.brand.filteredBrand
	);
	//item

	useEffect(() => {
		if (isRendered) {
			let sortedResult = filteredBrand;
			if (sortType === Sort.low) {
				sortedResult = [...filteredBrand].sort((a, b) => a.price! - b.price!);
			} else if (sortType === Sort.high) {
				sortedResult = [...filteredBrand].sort((a, b) => b.price! - a.price!);
			} else if (sortType === Sort.default) {
				sortedResult = filteredBrand;
			}
			setResult(sortedResult);
		} else {
			setResult(arrProduct);
		}
	}, [filteredBrand, arrProduct, sortType]);

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
						{result.map((item: ProductModel, index: number) => (
							<Item product={item} key={index} />
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
