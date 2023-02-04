import styled from 'styled-components';
import { Divider } from './Filter';

const FilterOptions = () => {
	return (
		<Container>
			<h3>Sort by</h3>
			<select>
				<option value="default">Default</option>
				<option value="low">Price : Low to High</option>
				<option value="high">Price : High to Low</option>
				<option value="A">A...Z</option>
				<option value="Z">Z...A</option>
			</select>

			<Divider />
		</Container>
	);
};

export default FilterOptions;

const Container = styled.div`
	h3 {
		margin-bottom: 0.5rem;
		font-size: 1rem;
		font-weight: bold;
	}
`;
