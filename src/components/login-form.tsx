import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FormError } from "./form-error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { loginMutation, loginMutationVariables } from "../__generated__/loginMutation";
import { authTokenVar, isLoggedInVar } from "../apollo";
import { LOCALSTORAGE_TOKEN } from "../constants";

const LOGIN_MUTATION = gql`
  mutation loginMutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      token
      error
    }
  }
`;

interface LoginFormInterface {
  email: string;
  password: string;
  resultError?: string;
}

export const LoginForm = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInterface>();

  const nagative = useNavigate();

  const onCompleted = (data: loginMutation) => {
    const {
      login: { ok, token },
    } = data;
    if (ok && token) {
      localStorage.setItem(LOCALSTORAGE_TOKEN, token);
      authTokenVar(token);
      isLoggedInVar(true);
      nagative("/", { replace: true });
    }
  };

  const [loginMutation, { data: loginMutationResult, loading }] = useMutation<loginMutation, loginMutationVariables>(
    LOGIN_MUTATION,
    { onCompleted },
  );

  const onSubmit = async () => {
    if (!loading) {
      const { email, password } = getValues();
      await loginMutation({
        variables: {
          loginInput: {
            email,
            password,
          },
        },
      });
    }
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <LoginInputBox>
        <InputIcon icon={faUser} />
        <LoginEmailInput
          {...register("email", {
            required: "Email is required",
          })}
          name="email"
          required
          type="email"
          placeholder="이메일"
        />
      </LoginInputBox>
      <LoginInputBox>
        <InputIcon icon={faLock} />
        <LoginPasswordInput
          {...register("password", {
            required: "Password is required",
          })}
          name="password"
          type="password"
          required
          placeholder="비밀번호"
        />
      </LoginInputBox>
      {errors.password?.message && <FormError errorMessage={errors.password?.message} />}
      <LoginSubmitButton disabled={loading}>{loading ? "Loading..." : "LOG IN"}</LoginSubmitButton>
      {loginMutationResult?.login.error && <FormError errorMessage={loginMutationResult.login.error} />}
    </LoginFormContainer>
  );
};

const LoginFormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const LoginInputBox = styled.div`
  width: 90%;
  max-width: 380px;
  margin-bottom: 30px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const LoginEmailInput = styled.input`
  background: white;
  width: 100%;
  font-size: 12pt;
  padding: 15px 20px 15px 45px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: box-shadow 0.2s ease-in-out;
  &:focus {
    outline: none;
  }
  &:focus,
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

const LoginPasswordInput = styled(LoginEmailInput)``;

const InputIcon = styled(FontAwesomeIcon)`
  width: 15px;
  height: 100%;
  position: absolute;
  left: 15px;
  color: #cccccc;
`;

const LoginSubmitButton = styled.button`
  width: 90%;
  max-width: 380px;
  height: 70px;
  border: none;
  cursor: pointer;
`;
