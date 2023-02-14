import styled, { css } from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from './MainPage';
import { cartActions } from '../store/cartSlice';
import { RootState } from '../store/store';
import { getKrPrice } from '../shares/utils';
import { ProductModel } from '../shares/Types';

const Cart = () => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(true);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const itemPrice = cart.map((state) => {
    return Object.values(state)[2] * state.count;
  });

  const totalPrice = itemPrice.reduce((a, b) => a + b, 0);

  function onToggleCheck() {
    setCheck(!check);
  }

  return (
    <>
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
              <th>전체 선택 {cart.length}</th>
              <th>상품명</th>
              <th>수량</th>
              <th>상품금액</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item: ProductModel, i: number) => {
              return (
                <tr key={i}>
                  <td>
                    <CheckBox onClick={onToggleCheck} check={check}>
                      {check ? <p>✔</p> : null}
                    </CheckBox>
                  </td>
                  <td>
                    <CartImg src={cart[i].image} />
                  </td>
                  <td>{cart[i].name}</td>
                  <td>
                    <CountBtn
                      onClick={() => {
                        dispatch(cartActions.removeCount(i));
                      }}
                    >
                      <span>-</span>
                    </CountBtn>
                    {cart[i].count}
                    <CountBtn
                      onClick={() => {
                        dispatch(cartActions.addCount(i));
                      }}
                    >
                      <span>+</span>
                    </CountBtn>
                  </td>
                  <td>{`${getKrPrice(cart[i].price! * cart[i].count)} 원`}</td>
                  <td
                    onClick={() => {
                      dispatch(cartActions.removeItem(cart[i]));
                    }}
                  >
                    <DeleteIcon>
                      <span>삭제</span>
                    </DeleteIcon>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </CartStyle>
      </CartContainer>
      <PayWrapper>
        <CartPrice>
          <span>결제 예정 금액</span>
          <p>{`${getKrPrice(totalPrice)} 원`}</p>
        </CartPrice>
        <BtnStyle>주문하기</BtnStyle>
      </PayWrapper>
    </>
  );
};

export default Cart;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 90%;
  min-height: calc(100vh - 12rem);
  margin: 0 auto;
`;

const PayWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CartStyle = styled.table`
  height: 100%;
  margin: 1rem auto;
  border-collapse: collapse;
  table-layout: fixed;

  thead tr th {
    padding: 10px 10px;
    border-bottom: 2px solid lightgray;
  }

  tbody tr td {
    padding: 8px 10px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

const CartPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 65px;
  padding: 0 32px;
  background-color: transparent;
  border: 1px solid lightgray;

  > span {
    font-size: 18px;
  }

  > p {
    font-size: 18px;
  }
`;

export const BtnStyle = styled.button`
  padding: 12px 40px;
  margin: 2%;
  background-color: #000000;
  color: #fff;
  font-size: 20px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: var(--font-Noto-Sans-KR);
  &:hover {
    background-color: #de3f3f;
  }
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
  width: 1rem;
  height: 1rem;
  border-radius: 5px;
  background-color: #6c6c6c;
  color: white;
  font-size: 15px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

const CartImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const DeleteIcon = styled.button`
  padding: 0;
  background-color: #000000;
  border-radius: 5px;
  color: white;
  padding: 0.4rem;
  font-size: 20px;
  width: 100px;
  border: none;
  cursor: pointer;
  font-family: var(--font-Noto-Sans-KR);
  &:hover {
    background-color: #de3f3f;
  }
`;
