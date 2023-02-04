import styled from 'styled-components';
import FilterOptions from './FilterOptions';

const Filter = () => {
	return (
		<Container>
			<h2>Filter</h2>
			<Divider />
			<FilterOptions />
		</Container>
	);
};

export default Filter;

const Container = styled.div`
	width: 12rem;
	margin-left: 5rem;

	h2 {
		font-size: 1.5rem;
		font-weight: bold;
	}
	@media (max-width: 768px) {
		margin-left: 2rem;
	}
`;

export const Divider = styled.div`
	margin-bottom: 1.25rem;
	margin-top: 1.25rem;
	height: 1px;
	width: 100%;
	background-color: rgb(228 228 231);
`;
