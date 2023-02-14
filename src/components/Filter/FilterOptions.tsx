import styled from 'styled-components';
import { Divider } from './Filter';
import { useDispatch } from 'react-redux';

import Select from 'react-select';
import { SelectOptionType } from '../../shares/Types';
import { sortActions } from '../../store/sortSlice';
import { Sort } from '../../shares/Enums';

const FilterOptions = () => {
	const dispatch = useDispatch();
	const handleSelect = (options: SelectOptionType | null) => {
		dispatch(sortActions.setSortType(options!.value));
	};

	const options = [
		{ value: Sort.default, label: '기본값' },
		{ value: Sort.low, label: '가격 낮은 순' },
		{ value: Sort.high, label: '가격 높은 순' },
	];

	return (
		<Container>
			<h3>Sort by</h3>
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

export default FilterOptions;

export const Container = styled.div`
	h3 {
		margin-bottom: 0.5rem;
		font-size: 1rem;
		font-weight: bold;
	}
`;
