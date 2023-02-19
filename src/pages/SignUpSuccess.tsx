import styled from 'styled-components';
import { DelayMotion } from '../shares/Motion';
import { useNavigate } from 'react-router-dom';

const SignUpSuccess = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <DelayMotion>
        <h1> 회원가입이 성공적으로 완료되었습니다.</h1>
        <button onClick={() => navigate('/login')}>로그인 페이지로 이동</button>
      </DelayMotion>
    </Container>
  );
};

export default SignUpSuccess;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  button {
    background-color: black;
    color: white;
    margin-left: 9rem;
    width: 14rem;
    border-radius: 50px;
    font-size: 25px;
    transition: 0.2s;
    padding: 1rem;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
