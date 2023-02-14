import { signOut } from 'firebase/auth';
import { Container } from './SignUpSuccess';
import { appAuth } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import styled from 'styled-components';

const MyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogOut = async () => {
    try {
      await signOut(appAuth);
      dispatch(authActions.logout());
      navigate('/');
    } catch (error: any) {
      throw new Error('로그아웃에 실패했습니다.');
    }
  };

  console.log(user?.displayName);
  return (
    <Wrapper>
      <h1>어서오세요 {user?.displayName}님!</h1>
      <button onClick={handleLogOut}>로그아웃</button>
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled(Container)`
  button {
    margin-right: 10rem;
  }
`;
