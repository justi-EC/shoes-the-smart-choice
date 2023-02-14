import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Cart } from '@styled-icons/ionicons-outline/Cart';
import { User } from '@styled-icons/boxicons-regular/User';
import { useDispatch, useSelector } from 'react-redux';
import { brandActions } from '../store/brandSlice';
import { RootState } from '../store/store';
import { cartActions } from '../store/cartSlice';
import { Home } from '@styled-icons/boxicons-regular';
import { Grid } from '@styled-icons/bootstrap';
import { Menu } from '@styled-icons/entypo';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const dispatch = useDispatch();
  const { arrProduct } = useSelector((state: RootState) => state.product);
  const total = useSelector((state: RootState) => state.cart.total);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (total === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [total]);

  return (
    <>
      <HeaderStyle>
        <HeaderOverlay
          open={isOpen}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <h1 onClick={() => navigate('/')}>Shoes Shop</h1>
        <header>
          <HeaderMenu open={isOpen}>
            <NavLink to="/main">
              <Home width={35} height={35} />
              <div>메인화면</div>
            </NavLink>
            <NavLink
              to="/itemall"
              onClick={() => dispatch(brandActions.filteredAll(arrProduct))}
            >
              <Grid width={35} height={35} />
              <div>전체상품</div>
            </NavLink>
            {!user && (
              <NavLink to="/login">
                <User width={35} height={35} />
                <div>로그인</div>
              </NavLink>
            )}
            {user && (
              <NavLink to="/mypage">
                <User width={35} height={35} />
                <div>내 정보</div>
              </NavLink>
            )}
            {user && (
              <NavLink to="/cart">
                <Button
                  btnIsHighlighted={btnIsHighlighted}
                  onClick={() => dispatch(cartActions.resetCount())}
                >
                  <Cart width={40} height={40} />
                </Button>
                <div onClick={() => dispatch(cartActions.resetCount())}>
                  장바구니
                </div>
              </NavLink>
            )}

            <Badge total={total}>{total}</Badge>
          </HeaderMenu>
        </header>
      </HeaderStyle>
      <MobileMenu onClick={() => setMobileIsOpen(!mobileIsOpen)}>
        <Menu size={50} />
      </MobileMenu>
    </>
  );
};

export default Header;
interface BumpProps {
  btnIsHighlighted: boolean;
}

interface Total {
  total: number;
}

const Badge = styled.div<Total>`
  position: relative;
  bottom: 20px;
  right: 36px;
  background-color: #000000;
  font-size: 20px;
  color: white;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 50%;

  ${({ total }) =>
    total === 0
      ? `
		visibility : hidden;
			`
      : ` 
		visibility : visible;
		`}
`;

const Button = styled.button<BumpProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${({ btnIsHighlighted }) =>
    btnIsHighlighted
      ? `
	animation: bump 300ms ease-out;

	@keyframes bump {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
	`
      : ``}
  span {
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }
`;

const HeaderStyle = styled.div`
  position: fixed;
  z-index: 97;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0 1rem;
  background-color: #fff;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    display: none;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    display: none;
    font-family: var(--font-Lobster);

    @media screen and (min-width: 768px) {
      display: block;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;

const HeaderOverlay = styled.div<any>`
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(21, 21, 21, 0.5);
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;

  ${(props: any) =>
    props.open &&
    css`
      visibility: visible;
      opacity: 1;
    `}

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderMenu = styled.div<any>`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  translate: 100% 0;
  width: 14rem;
  height: 100%;
  padding: 1.25rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  visibility: hidden;
  transition: 0.3s;

  div {
    margin-left: 10px;
    font-size: 20px;
  }

  ${(props) =>
    props.open &&
    css`
      translate: 0 0;
      visibility: visible;
    `}

  @media screen and (min-width: 768px) {
    position: relative;
    top: 0;
    right: 0;
    translate: 0 0;
    width: auto;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    visibility: visible;
  }
`;

const MobileMenu = styled.button`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  margin-top: 2rem;
  margin-right: 2rem;
  color: white;
  background-color: black;
  border-radius: 50%;
  padding: 1.1rem;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  margin-top: 2rem;
  margin-left: 1rem;
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

  &:hover {
    border-bottom: 2px solid #3d3d3d;
  }

  span {
    font-size: 2rem;
    margin-right: 1rem;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
