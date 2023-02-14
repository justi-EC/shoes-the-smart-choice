import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Divider } from './Filter';
import { Container } from './FilterOptions';
import { RootState } from '../../store/store';
import { SelectOptionType } from '../../shares/Types';
import { brandActions } from '../../store/brandSlice';
import { Brand } from '../../shares/Enums';

const FilterBrand = () => {
	const { arrProduct } = useSelector((state: RootState) => state.product);
	const dispatch = useDispatch();

	const handleSelect = (option: SelectOptionType | null) => {
		const brandName = option!.value === 'default' ? '' : option!.value;
		dispatch(
			brandActions.filteredBrand({ brandName, allProducts: arrProduct })
		);
	};

	const options = [
		{ value: Brand.default, label: '전체' },
		{ value: Brand.Nike, label: '나이키' },
		{ value: Brand.Adidas, label: '아디다스' },
		{ value: Brand.Vans, label: '반스' },
		{ value: Brand.Converse, label: '컨버스' },
	];

	return (
		<Container>
			<h3>Brand</h3>
			<Select
				options={options}
				onChange={handleSelect}
				theme={(theme) => ({
					...theme,
					borderRadius: 0,
					colors: {
						...theme.colors,
						primary25: 'lightgray',
						primary: 'black',
					},
				})}
			/>

			<Divider />
		</Container>
	);
};

export default FilterBrand;
