import styled from 'styled-components';
import { Xmark } from '@styled-icons/fa-solid/Xmark';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home } from '@styled-icons/boxicons-regular';
import { useDispatch, useSelector } from 'react-redux';
import { brandActions } from '../store/brandSlice';
import { Grid } from '@styled-icons/bootstrap';
import { User } from '@styled-icons/boxicons-regular/User';
import { RootState } from '../store/store';
import { Cart } from '@styled-icons/ionicons-outline/Cart';
interface Props {
  toggle: () => void;
}

const MenuNav = ({ toggle }: Props) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const { arrProduct } = useSelector((state: RootState) => state.product);
  const navigate = useNavigate();

  const handleNavigation = (path: string, callback?: Function) => {
    navigate(path);
    if (callback) {
      callback();
    }
    toggle();
  };

  return (
    <Nav>
      <div onClick={toggle}>
        <Xmark width={40} height={40} />
      </div>
      <div
        onClick={() => {
          handleNavigation('/main');
        }}
      >
        <span>
          <Home size={60} />
        </span>
        <span>메인화면</span>
      </div>

      <div
        onClick={() => {
          handleNavigation('/itemall', () =>
            dispatch(brandActions.filteredAll(arrProduct)),
          );
        }}
      >
        <span>
          <Grid size={60} />
        </span>
        <span>전체 상품</span>
      </div>
      <div
        onClick={() => {
          if (user) {
            handleNavigation('/mypage');
          } else {
            handleNavigation('/login');
          }
        }}
      >
        <span>
          <User size={60} />
        </span>
        <span>{user ? `회원 정보` : `로그인`}</span>
      </div>
      <div
        onClick={() => {
          handleNavigation('/cart');
        }}
      >
        <span>{user && <Cart size={60} />}</span>
        <span>{user && `장바구니`}</span>
      </div>
      <div>
        <h2
          onClick={() => {
            handleNavigation('/');
          }}
        >
          Shoes Shop
        </h2>
      </div>
    </Nav>
  );
};

export default MenuNav;

const Nav = styled.div`
  z-index: 999;
  position: fixed;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 250px;
  background-color: #f4f4f4;
  filter: drop-shadow(0 0 25px rgb(0 0 0 / 0.2));
  animation: slide 200ms ease-out forwards;

  @keyframes slide {
    from {
      opacity: 0;
      transform: translateX(0);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  div:first-child {
    margin: 2rem;
    cursor: pointer;
    border: none;
    opacity: 70%;
    transition-duration: 0.3s;
    color: black;

    &:hover {
      opacity: 100%;
    }
  }

  div:nth-child(n + 2) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem;
    color: black;
    font-size: 20px;
    font-weight: bold;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      transform: translateY(-15px);
    }
    span:last-child {
      margin-top: 0.6rem;
    }
    h2 {
      font-weight: bold;
      font-size: 2rem;
      text-align: center;
      margin-top: 6rem;
    }
  }
`;
