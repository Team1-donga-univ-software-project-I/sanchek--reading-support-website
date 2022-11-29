import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
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
    const { title, content, bookName } = getValues();
    try {
      await createSanchekMutation({
        variables: {
          input: { title, content, isOpend: true, bookName },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SanchekForm onSubmit={handleSubmit(onSubmit)}>
      <TitleInput
        {...register("title", {
          required: "Title is required",
        })}
        required
        maxLength={120}
        name="title"
        type="text"
        placeholder="제목을 입력하세요"
      />
      <input {...register("bookName")} name="bookName" type="text" placeholder="BookName" />
      <ContentTextArea
        {...register("content", {
          required: "Content is required",
        })}
        required
        maxLength={1200}
        name="content"
        placeholder="내용을 입력하세요"
      />
      <button>저장</button>
    </SanchekForm>
  );
};

const SanchekForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const TitleInput = styled.input`
  height: 50px;
  border: none;
  border-bottom: #dddddd 3px solid;
  font-size: 24pt;
  padding: 5px 20px 10px 20px;
  margin-bottom: 25px;
  transition: border 0.2s ease-in-out;
  &:focus {
    outline: none;
    border-bottom: #82954b 3px solid;
  }
`;

const ContentTextArea = styled(TextareaAutosize)`
  resize: none;
  min-height: 300px;
  padding: 10px 20px;
  font-size: 16pt;
  border: none;
  font-family: "KyoboHandwriting2020A";
  caret-color: #cccccc;
  &:focus {
    outline: none;
  }
  background-attachment: local;
  background-image: linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(white, white 40px, #ccc 40px, #ccc 41px, white 41px);
  line-height: 41px;
  padding: 8px 10px;
`;
