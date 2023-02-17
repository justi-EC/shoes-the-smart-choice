import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { appAuth } from '../firebase/config';
import { authActions } from '../store/authSlice';

const Login = () => {
  const checkEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,6}$/i;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isEmailValid = checkEmail.test(email);
  const isPasswordValid = password.length > 7;

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const logininputType = e.target.type;
    logininputType === 'email' && setEmail(e.target.value);
    logininputType === 'password' && setPassword(e.target.value);
  };

  const onSubmitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid) {
      setIsValid(true);
      try {
        const res = await signInWithEmailAndPassword(appAuth, email, password);
        const user = res.user;
        dispatch(authActions.login(user));
        navigate('/main');
      } catch (error: any) {
        setIsValid(false);
      }
    } else {
      setIsValid(false);
    }
  };

  return (
    <FormDiv>
      <FormStyle>
        <LoginInput
          type="email"
          placeholder="email"
          value={email}
          validProps={isValid}
          onChange={handleData}
          onFocus={() => setIsValid(true)}
        />
        <LoginInput
          type="password"
          placeholder="password"
          onChange={handleData}
          validProps={isValid}
          value={password}
          onFocus={() => setIsValid(true)}
        />
        <HelperText validProps={isValid}>
          아이디와 비밀번호를 확인하세요.
        </HelperText>
        <button type="submit" onClick={onSubmitHandler}>
          로그인
        </button>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <span>회원가입 페이지로 이동</span>
        </Link>
      </FormStyle>
    </FormDiv>
  );
};

export default Login;

interface ValidType {
  validProps: boolean;
}

const FormDiv = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: calc(100vh - 12rem);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const HelperText = styled.div<ValidType>`
  visibility: hidden;
  ${({ validProps }) =>
    !validProps &&
    `
  visibility : visible;  
  color : rgba(255, 0, 0, 0.6);
  `}
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin: 0 auto;
  padding: 18px 10px;

  span {
    color: black;
  }

  button {
    margin: 1rem;
    padding: 8px 16px;
    background-color: #3d3d3d;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: black;
    }
    font-family: var(--font-Noto-Sans-KR);
  }
`;

const LoginInput = styled.input<ValidType>`
  width: 100%;
  margin: 1rem;
  padding: 0.5rem;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  &:focus {
    border-bottom: 2px solid #3d3d3d;
  }
  ${({ validProps }) =>
    !validProps &&
    `
  border-bottom: 2px solid rgba(255, 0, 0, 0.3);
  `}
`;
