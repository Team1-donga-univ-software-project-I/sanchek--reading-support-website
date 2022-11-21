import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createSanchek, createSanchekVariables } from "../__generated__/createSanchek";

const CREATE_SANCHEK_MUTATION = gql`
  mutation createSanchek($input: CreateSanchekInput!) {
    createSanchek(input: $input) {
      ok
      error
    }
  }
`;

interface CreateSanchekFormInterface {
  title: string;
  content: string;
  isOpend: boolean;
  bookName: string;
}

export const WriteSanchekForm = () => {
  const { register, getValues, handleSubmit } = useForm<CreateSanchekFormInterface>({
    mode: "onChange",
  });

  const nagative = useNavigate();

  const onCompleted = (data: createSanchek) => {
    const {
      createSanchek: { ok },
    } = data;
    if (ok) {
      nagative("/", { replace: true });
    }
  };

  const [createSanchekMutation] = useMutation<createSanchek, createSanchekVariables>(CREATE_SANCHEK_MUTATION, {
    onCompleted,
  });

  const onSubmit = async () => {
    const { title, content, isOpend, bookName } = getValues();
    try {
      await createSanchekMutation({
        variables: {
          input: { title, content, isOpend, bookName },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("title", {
          required: "Title is required",
        })}
        required
        name="title"
        type="text"
        placeholder="Title"
      />
      <textarea
        {...register("content", {
          required: "Content is required",
        })}
        required
        name="content"
        placeholder="Content"
      />
      <input {...register("isOpend")} type="checkbox" name="isOpend" />
      <input {...register("bookName")} name="bookName" type="text" placeholder="BookName" />
      <button>저장</button>
    </form>
  );
};
