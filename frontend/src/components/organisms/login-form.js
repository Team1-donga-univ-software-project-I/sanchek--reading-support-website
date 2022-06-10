import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Helmet } from "react-helmet";

export const LoginForm = () => {
  const [confirmBtn, setConfirmBtn] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
    autoLogin: false,
  });
  const { register, watch } = useForm();

  const { emailQuery, passwordQuery, autoCheck } = watch();

  const onClickLogin = () => {
    console.log(state);
  };

  useEffect(() => {
    setState({
      email: emailQuery,
      password: passwordQuery,
      autoLogin: autoCheck,
    });
  }, [emailQuery, passwordQuery, autoCheck]);

  useEffect(() => {
    if (state.email !== "") {
      setEmailFocused(true);
    } else {
      setEmailFocused(false);
    }
  }, [state.email]);

  useEffect(() => {
    if (state.password !== "") {
      setPasswordFocused(true);
    } else {
      setPasswordFocused(false);
    }
  }, [state.password]);

  useEffect(() => {
    if (state.email !== "" && state.password !== "") {
      setConfirmBtn(true);
    } else {
      setConfirmBtn(false);
    }
  }, [state]);
  return (
    <LoginFormContainer>
      <Helmet>
        <title>산책 | 로그인</title>
      </Helmet>
      <LoginInputPack>
        <LoginInputText isFilled={emailFocused}>이메일</LoginInputText>
        <LoginInputBox type="email" {...register("emailQuery")} />
      </LoginInputPack>
      <LoginInputPack>
        <LoginInputText isFilled={passwordFocused}>비밀번호</LoginInputText>
        <LoginInputBox type="password" {...register("passwordQuery")} />
      </LoginInputPack>
      <LoginAutoCheckPack>
        <LoginAutoCheckBox type="checkbox" name="자동 로그인" {...register("autoCheck")} />
        <div>자동 로그인</div>
      </LoginAutoCheckPack>
      {confirmBtn ? (
        <LoginConfirmBtn onClick={onClickLogin}>로그인</LoginConfirmBtn>
      ) : (
        <LoginConfirmBtn disabled>로그인</LoginConfirmBtn>
      )}
    </LoginFormContainer>
  );
};

const LoginFormContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const LoginInputPack = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: flex-end;
  position: relative;
  margin-bottom: 15px;
  &:focus-within > div {
    top: 10px;
    font-size: 12px;
    color: #888;
  }
`;

const LoginInputBox = styled.input`
  height: 45px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #82954b;
  padding: 0 15px;
  background: none;
  z-index: 2;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

const LoginInputText = styled.div`
  position: absolute;
  top: 40px;
  left: 15px;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  color: #82954b;
  ${props => (props.isFilled ? "top: 10px; font-size:12px; color: #888" : "top: 40px")};
`;

const LoginAutoCheckPack = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  font-size: 15px;
  margin-bottom: 30px;
`;

const LoginAutoCheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const LoginConfirmBtn = styled.button`
  height: 50px;
  margin: 0 10px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  background-color: #82954b;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(102%);
  }
  &:disabled {
    background-color: #ccc;
  }
`;
