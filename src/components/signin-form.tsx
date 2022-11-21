import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { createAccountMutation, createAccountMutationVariables } from "../__generated__/createAccountMutation";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccountMutation($createAccountInput: CreateAccountInput!) {
    createAccount(input: $createAccountInput) {
      ok
      error
    }
  }
`;

interface CreateAccountFormInterface {
  email: string;
  password: string;
  nickname: string;
}

export const SignInForm = () => {
  const { register, getValues, handleSubmit } = useForm<CreateAccountFormInterface>({
    mode: "onChange",
  });

  const nagative = useNavigate();

  const onCompleted = (data: createAccountMutation) => {
    const {
      createAccount: { ok },
    } = data;
    if (ok) {
      nagative("/login", { replace: true });
    }
  };

  const [createAccountMutation, { loading }] = useMutation<createAccountMutation, createAccountMutationVariables>(
    CREATE_ACCOUNT_MUTATION,
    {
      onCompleted,
    },
  );

  const onSubmit = () => {
    if (!loading) {
      const { email, password, nickname } = getValues();
      createAccountMutation({
        variables: {
          createAccountInput: { email, password, nickname },
        },
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: "Email is required",
        })}
        required
        name="email"
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", {
          required: "Password is required",
        })}
        required
        name="password"
        type="password"
        placeholder="Password"
      />
      <input
        {...register("nickname", {
          required: "Nickname is required",
        })}
        required
        name="nickname"
        type="nickname"
        placeholder="Nickname"
      />
      <SignInSubmitButton disabled={loading}>{loading ? "Loading..." : "Log In"}</SignInSubmitButton>
      <SignInToLoginInLink to="/login">login</SignInToLoginInLink>
    </form>
  );
};

const SignInSubmitButton = styled.button``;

const SignInToLoginInLink = styled(Link)``;
