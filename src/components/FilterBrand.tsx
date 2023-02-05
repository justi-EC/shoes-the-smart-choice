import { useDispatch, useSelector } from 'react-redux';
import { Divider } from './Filter';
import { Container } from './FilterOptions';
import { RootState } from '../store/store';
import { brandActions } from '../store/brandSlice';

const FilterBrand = () => {
	const { arrProduct } = useSelector((state: RootState) => state.product);
	const dispatch = useDispatch();

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const brandName =
			e.currentTarget.value === 'default' ? '' : e.currentTarget.value;
		dispatch(
			brandActions.filteredBrand({ brandName, allProducts: arrProduct })
		);
	};

	return (
		<Container>
			<h3>Brand</h3>
			<select onChange={handleSelect}>
				<option value="default">전체</option>
				<option value="Nike">나이키</option>
				<option value="Adidas">아디다스</option>
				<option value="Vans">반스</option>
				<option value="Converse">컨버스</option>
			</select>

			<Divider />
		</Container>
	);
};

export default FilterBrand;
