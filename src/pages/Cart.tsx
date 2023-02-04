import styled, { css } from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from './MainPage';
import { cartActions } from '../store/cartSlice';
import { RootState } from '../store/store';
import { getKrPrice } from '../shares/utils';

const Cart = () => {
	const dispatch = useDispatch();
	const [check, setCheck] = useState(true);
	const state = useSelector((state: RootState) => state);

	const itemPrice = state.cart.map((state) => {
		return Object.values<any>(state)[2] * state.count;
	});

	const totalPrice = itemPrice.reduce((a, b) => a + b, 0);

	function onToggleCheck() {
		setCheck(!check);
	}

	return (
		<CartContainer>
			<Menu>
				<span>장바구니</span>
				<span>{`>`}</span>
			</Menu>
			<CartStyle>
				<thead>
					<tr>
						<th>
							<CheckBox onClick={onToggleCheck} check={check}>
								{check ? <p>✔</p> : null}
							</CheckBox>
						</th>
						<th>전체 선택 {state.cart.length}</th>
						<th>상품명</th>
						<th>수량</th>
						<th>상품금액</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{state.cart.map((item: any, i: any) => {
						return (
							<tr key={i}>
								<td>
									<CheckBox onClick={onToggleCheck} check={check}>
										{check ? <p>✔</p> : null}
									</CheckBox>
								</td>
								<td>
									<CartImg src={state.cart[i].image} />
								</td>
								<td>{state.cart[i].name}</td>
								<td>
									<CountBtn
										onClick={() => {
											dispatch(cartActions.removeCount(i));
										}}
									>
										<span>remove</span>
									</CountBtn>
									{state.cart[i].count}
									<CountBtn
										onClick={() => {
											dispatch(cartActions.addCount(i));
										}}
									>
										<span>add</span>
									</CountBtn>
								</td>
								<td>{`${getKrPrice(
									state.cart[i].price! * state.cart[i].count
								)} 원`}</td>
								<td
									onClick={() => {
										dispatch(cartActions.removeItem(state.cart[i]));
									}}
								>
									<DeleteIcon>
										<span>delete</span>
									</DeleteIcon>
								</td>
							</tr>
						);
					})}
				</tbody>
			</CartStyle>
			<CartPrice>
				<span>결제 예정 금액</span>
				<p>{`${getKrPrice(totalPrice)} 원`}</p>
			</CartPrice>
			<BtnStyle>주문하기</BtnStyle>
		</CartContainer>
	);
};

export default Cart;

const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 100%;
	min-height: calc(100vh - 12rem);
	margin: 0 auto;
`;

const CartStyle = styled.table`
	width: 81%;
	height: 100%;
	margin: 1rem auto;
	margin-top: 3rem;
	border-collapse: collapse;

	thead tr th {
		padding: 8px 10px;
		border-bottom: 2px solid lightgray;
	}

	tbody tr td {
		padding: 8px 10px;
		text-align: center;
	}
`;

const CartPrice = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 320px;
	height: 64px;
	margin: 5%;
	padding: 0 32px;
	background-color: transparent;
	border: 1px solid black;

	> span {
		font-size: 14px;
		font-weight: bold;
	}

	> p {
		font-size: 18px;
		font-weight: bold;
	}
`;

export const BtnStyle = styled.button`
	margin: 5%;
	padding: 12px 40px;
	background-color: #000000;
	color: #fff;
	font-size: 15px;
	border: none;
	cursor: pointer;
	border-radius: 6px;
`;

const CheckBox = styled.div<any>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	font-size: 16px;
	border: 1px solid #3d3d3d;
	cursor: pointer;
	${(props: any) =>
		props.check &&
		css`
			background-color: #3d3d3d;
			color: #fff;
		`}
`;

const CountBtn = styled.button`
	margin: 4px 10px;
	padding: 4px 6px;
	background-color: #f4f4f4;
	font-size: 10px;
	border: none;
	cursor: pointer;
`;

const CartImg = styled.img`
	width: 80px;
	height: 80px;
	object-fit: contain;
`;

const DeleteIcon = styled.button`
	padding: 0;
	background-color: #fff;
	font-size: 20px;
	border: none;
	cursor: pointer;
`;
