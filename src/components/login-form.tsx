import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FormError } from "./form-error";
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
      <LoginEmailInput
        {...register("email", {
          required: "Email is required",
        })}
        name="email"
        required
        type="email"
        placeholder="Email"
      />
      {errors.email?.message && <FormError errorMessage={errors.email?.message} />}
      <LoginPasswordInput
        {...register("password", {
          required: "Password is required",
        })}
        name="password"
        type="password"
        required
        placeholder="Password"
      />
      {errors.password?.message && <FormError errorMessage={errors.password?.message} />}
      <LoginSubmitButton disabled={loading}>{loading ? "Loading..." : "Log In"}</LoginSubmitButton>
      {loginMutationResult?.login.error && <FormError errorMessage={loginMutationResult.login.error} />}
      <LoginToSignInLink to="/sign-in">회원가입</LoginToSignInLink>
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

const LoginEmailInput = styled.input`
  background: white;
  width: 50%;
  height: 40px;
  border: none;
  margin-bottom: 30px;
  &:focus {
    outline: none;
  }
`;

const LoginPasswordInput = styled.input`
  background: white;
  width: 50%;
  height: 40px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const LoginSubmitButton = styled.button``;

const LoginToSignInLink = styled(Link)``;
