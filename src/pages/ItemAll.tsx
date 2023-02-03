import { Menu, GridItem } from './MainPage';
import Item from '../components/Item';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ProductModel } from '../shares/Type';

const ItemAll = () => {
	const { arrProduct } = useSelector((state: RootState) => state.product);

	return (
		<>
			<Menu>
				<span>전체 상품</span>
				<span>{`>`}</span>
			</Menu>
			<GridItem>
				{arrProduct.map((item: ProductModel, index: number) => (
					<Item product={item} />
				))}
			</GridItem>
		</>
	);
};

export default ItemAll;
