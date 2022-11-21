import React from "react";
import { Helmet } from "react-helmet-async";
import { WriteSanchekForm } from "../components/create-sanchek-form";

export const WriteSanchek = () => {
  return (
    <>
      <Helmet>
        <title>산책 | 글쓰기</title>
      </Helmet>
      <WriteSanchekForm />
    </>
  );
};
