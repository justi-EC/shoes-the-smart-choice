import styled from 'styled-components';
import { Divider } from './Filter';
import { useDispatch } from 'react-redux';
import { sortActions } from '../store/sortSlice';

const FilterOptions = () => {
	const dispatch = useDispatch();
	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(sortActions.setSortType(e.currentTarget.value));
	};

	return (
		<Container>
			<h3>Sort by</h3>
			<select onChange={handleSelect}>
				<option value="default">기본값</option>
				<option value="low">가격 낮은 순</option>
				<option value="high">가격 높은 순</option>
			</select>

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
