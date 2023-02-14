import styled from 'styled-components';
import FilterOptions from './FilterOptions';
import FilterBrand from './FilterBrand';

const Filter = () => {
  return (
    <Container>
      <h2>Filter</h2>
      <Divider />
      <FilterOptions />
      <FilterBrand />
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  width: 15rem;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  @media screen and (min-width: 768px) {
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
