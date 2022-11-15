import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FormError } from "./form-error";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      ok
      token
      error
    }
  }
`;

interface LoginFormInterface {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInterface>();

  const [loginMutation] = useMutation(LOGIN_MUTATION);

  const onSubmit = async () => {
    const { email, password } = getValues();
    const {
      data: { login },
    } = await loginMutation({
      variables: {
        email,
        password,
      },
    });
    console.log(login.token);
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
      <LoginSubmitButton>로그인</LoginSubmitButton>
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
