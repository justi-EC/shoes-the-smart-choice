import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { Menu } from './MainPage';
import { cartActions } from '../store/cartSlice';
import { BtnStyle } from './Cart';
import { RootState } from '../store/store';
import { ProductModel } from '../shares/Types';
import { getKrPrice } from '../shares/utils';
import { useState } from 'react';

const ItemDetail = () => {
  const dispatch = useDispatch();
  const { arrProduct } = useSelector((state: RootState) => state.product);
  const user = useSelector((state: RootState) => state.auth.user);
  let { id } = useParams();
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const findItem = arrProduct.find((item: ProductModel) => {
    return item.id === Number(id);
  }) as ProductModel;

  const itemCountIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
  };

  const itemCountDecrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <DetailWrapper>
      <Menu>
        <span>상품 정보</span>
        <span>{`>`}</span>
      </Menu>
      <DetailItemBox>
        <DetailImg src={findItem.image} />
        <div>
          <h1>{findItem.name}</h1>
          <p>{findItem.description}</p>
          <span>{getKrPrice(findItem.price!)}원</span>
        </div>
        <div>
          <button onClick={itemCountDecrease}>-</button>
          <span>{count}</span>
          <button onClick={itemCountIncrease}>+</button>
        </div>
      </DetailItemBox>
      <MobileDetailFooter>
        <span>현재 가격 : {getKrPrice(findItem.price! * count)}원</span>
        <CartBtn
          onClick={() => {
            if (user) {
              dispatch(
                cartActions.addItem({
                  id: findItem.id,
                  name: findItem.name,
                  price: findItem.price,
                  image: findItem.image,
                  count: count,
                }),
              );
              Swal.fire({
                icon: 'success',
                text: '장바구니에 상품이 추가되었습니다.',
                confirmButtonColor: '#000000',
              });
              setCount(1);
            } else {
              Swal.fire({
                icon: 'error',
                text: '로그인이 필요합니다. 로그인하시겠습니까?',
                showCancelButton: true,
                confirmButtonText: 'YES!',
                confirmButtonColor: '#000000',
                cancelButtonText: 'NO',
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login');
                }
              });
            }
          }}
        >
          장바구니 담기
        </CartBtn>
      </MobileDetailFooter>
    </DetailWrapper>
  );
};

export default ItemDetail;

const MobileDetailFooter = styled.nav`
  position: fixed;
  z-index: 95;
  bottom: 0;
  margin-left: 13rem;
  width: 80%;
  height: 5rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

  span {
    padding-left: 2rem;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    margin-left: 3.5rem;
  }
`;

const DetailWrapper = styled.div`
  width: 100%;
`;

const CartBtn = styled(BtnStyle)`
  width: 50%;
  padding: 20px 10px;
`;

const DetailImg = styled.img`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 500px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  margin: 4rem auto 0;
  object-fit: contain;
`;

const DetailItemBox = styled.div`
  width: 100%;

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  div:nth-child(3) {
    display: flex;
    justify-content: flex-end;
    margin: 1rem 2rem 0 0;
    font-size: 18px;

    span,
    button {
      font-size: 20px;
      cursor: pointer;
      background-color: #000000;
      padding: 0.3rem 0.6rem;
      color: #fff;
    }
  }

  h1 {
    margin: 2rem 0;
    font-size: 50px;
  }

  p {
    margin: 0.7rem 0;
    color: rgba(0, 0, 0, 0.5);
  }

  span {
    font-weight: 800;
    font-size: 30px;
  }
`;
