import styled from 'styled-components';
import { DefaultMotion } from '../../shares/Motion';

interface Props {
  title: string;
  subtitle: string;
  image: string;
  right?: boolean;
  handleClick: () => void;
}

const Collection = ({
  title,
  subtitle,
  image,
  right = false,
  handleClick,
}: Props) => (
  <CollectionContainer right={right}>
    <DefaultMotion>
      <ImageContainer>
        <img src={image} alt={title} onClick={handleClick} />
      </ImageContainer>
    </DefaultMotion>
    <InfoContainer right={right}>
      <h1>{title}</h1>
      <div>{subtitle}</div>
      <button onClick={handleClick}>Explore</button>
    </InfoContainer>
  </CollectionContainer>
);

export default Collection;

interface RightProps {
  right?: boolean;
}

const CollectionContainer = styled.div<RightProps>`
  display: flex;
  margin-bottom: -2rem;
  height: 30rem;
  gap: 2rem;
  ${({ right }) =>
    right &&
    `
		flex-direction: row-reverse; 
		align-self: flex-end;
		`}
`;

const ImageContainer = styled.div`
  height: 20rem;
  width: 12rem;
  transition: all 0.1s linear;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 10rem;
  }
  @media screen and (min-width: 768px) {
    width: 16rem;
  }
  @media screen and (min-width: 1280px) {
    height: auto;
    width: 20rem;
  }

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 400px;
    height: 500px;
    @media screen and (max-width: 768px) {
      width: 350px;
      height: 470px;
    }
  }
`;

const InfoContainer = styled.div<RightProps>`
  display: flex;
  flex-direction: column;
  ${({ right }) =>
    right
      ? `
				align-items: flex-end;
				 text-align: right;
				 `
      : `
				align-items: flex-start;
				text-align: left;
				  `};

  @media screen and (max-width: 768px) {
    margin-left: 6.5rem;
    margin-right: -1rem;
  }

  h1 {
    margin-bottom: -2px;
    font-size: 50px;
    font-weight: bold;
    @media screen and (min-width: 768px) {
      font-size: 3rem;
    }
  }

  div {
    margin: 0.5rem;
    font-weight: bold;
    font-size: 1.4rem;
  }

  button {
    background-color: black;
    color: white;
    width: 8rem;
    text-align: center;
    font-size: 25px;
    transition: 0.2s;
    padding: 1rem;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
