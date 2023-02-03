import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { ProductModel } from '../shares/Type';
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

export const ItemImg = styled.img`
	width: 13rem;
	height: 14rem;
	object-fit: contain;
	margin: 10px;
`;

const ItemWrapper = styled.div`
	position: relative;
	width: 70%;
	margin: 16px auto;
	padding: 0.7rem 0;
	transition: 0.1s ease;
	cursor: pointer;
	border-radius: 10px;
	box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);

	&:hover {
		transform: translateY(-3px);
	}

	div {
		width: 100%;
		height: 100%;
	}

	h2 {
		margin-left: 1rem;
	}

	p {
		margin-left: 1rem;
	}

	span {
		position: absolute;
		bottom: 0;
		right: 0;
		margin: 0 1.2rem 1.2rem 0;
		cursor: pointer;
	}
`;
