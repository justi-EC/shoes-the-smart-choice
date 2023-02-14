import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { appAuth } from '../firebase/config';
import { authActions } from '../store/authSlice';

const SignUp = () => {
  const checkEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,6}$/i;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickName] = useState('');
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const isEmailValid = checkEmail.test(email);
  const isPasswordValid = password.length > 7;
  const isNickNameValid = nickName.length > 1;

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const logininputType = e.target.type;
    logininputType === 'email' && setEmail(e.target.value);
    logininputType === 'password' && setPassword(e.target.value);
    logininputType === 'text' && setNickName(e.target.value);
  };

  const onSubmitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid && isNickNameValid) {
      setIsValid(true);
      try {
        const res = await createUserWithEmailAndPassword(
          appAuth,
          email,
          password,
        );
        const user = res.user;
        updateProfile(user, { displayName: nickName });
        navigate('/signupsuccess');
      } catch (error: any) {
        setIsValid(false);
        switch (error.code) {
          case 'auth/email-already-in-use':
            setError('이미 사용중인 이메일 입니다.');
            break;
          case 'auth/wrong-password':
            setError('잘못된 비밀번호입니다.');
            break;
          default:
            setError('아이디와 비밀번호를 확인해주세요.');
            break;
        }
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
        <LoginInput
          type="text"
          placeholder="name"
          onChange={handleData}
          validProps={isValid}
          value={nickName}
          onFocus={() => setIsValid(true)}
        />
        <HelperText validProps={isValid}>{error}</HelperText>
        <button type="submit" onClick={onSubmitHandler}>
          회원가입
        </button>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <span>로그인 페이지로 이동</span>
        </Link>
      </FormStyle>
    </FormDiv>
  );
};

export default SignUp;

interface ValidType {
  validProps: boolean;
}

const FormDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: calc(100vh - 12rem);

  @media screen and (min-width: 768px) {
    width: 30%;
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
  width: 90%;
  margin: 0 auto;
  padding: 18px 10px;

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

  span {
    color: black;
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
