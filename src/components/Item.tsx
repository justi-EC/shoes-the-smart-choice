import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { ProductModel } from '../shares/Types';
import { getKrPrice } from '../shares/utils';

interface Props {
	product: ProductModel;
}

const Item = ({ product }: Props) => {
	const navigate = useNavigate();

	return (
		<ItemWrapper onClick={() => navigate(`/detail/${product.id}`)}>
			<div>
				<ItemImg src={product.image} />
			</div>
			<h2>{product.name}</h2>
			<p>{getKrPrice(product.price!)}원</p>
		</ItemWrapper>
	);
};

export default Item;

const ItemImg = styled.img`
	width: 85%;
	height: 18rem;
	object-fit: contain;
	margin-left: 1rem;
`;

const ItemWrapper = styled.div`
	position: relative;
	width: 70%;
	margin: 16px auto;
	padding: 0.7rem;
	transition: 0.4s ease;
	cursor: pointer;
	box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
		rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

	&:hover {
		transform: translateY(-15px);
	}

	div {
		width: 100%;
		height: 100%;
	}

	h2 {
		margin-left: 1rem;
		margin-right: 1rem;
	}

	p {
		margin-left: 1rem;
		margin-right: 1rem;
	}

	span {
		position: absolute;
		bottom: 0;
		right: 0;
		margin: 0 1.2rem 1.2rem 0;
		cursor: pointer;
	}
`;
