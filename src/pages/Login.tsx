import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  function handleLoginForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(loginActions.login({ email: text, password: text2 }));
    setText("");
    setText2("");
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function onChange2(e: React.ChangeEvent<HTMLInputElement>) {
    setText2(e.target.value);
  }

  return (
    <FormDiv>
      <FormStyle onSubmit={handleLoginForm}>
        <input
          type="text"
          placeholder="email"
          onChange={onChange}
          value={text}
        />
        <input
          type="password"
          placeholder="password"
          onChange={onChange2}
          value={text2}
        />
        <button>로그인</button>
        <div>
          <span>{`아직 계정이 없으신가요? ->`} </span>
          <span>회원가입</span>
        </div>
      </FormStyle>
    </FormDiv>
  );
};

export default Login;

const FormDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: calc(100vh - 12rem);
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 18px 10px;

  > input {
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
  }
  > button {
    margin: 1rem;
    padding: 8px 16px;
    background-color: #3d3d3d;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;
