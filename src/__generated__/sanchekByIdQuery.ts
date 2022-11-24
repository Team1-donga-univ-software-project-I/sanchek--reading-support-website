/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SanchekInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: sanchekByIdQuery
// ====================================================

export interface sanchekByIdQuery_findSanchekById_sanchek_author {
  __typename: "User";
  nickname: string;
}

export interface sanchekByIdQuery_findSanchekById_sanchek {
  __typename: "Sanchek";
  id: number;
  title: string;
  content: string;
  isOpend: boolean;
  author: sanchekByIdQuery_findSanchekById_sanchek_author;
  likedCount: number;
  bookName: string | null;
}

export interface sanchekByIdQuery_findSanchekById {
  __typename: "SanchekOutput";
  ok: boolean;
  error: string | null;
  sanchek: sanchekByIdQuery_findSanchekById_sanchek | null;
}

export interface sanchekByIdQuery {
  findSanchekById: sanchekByIdQuery_findSanchekById;
}

export interface sanchekByIdQueryVariables {
  input: SanchekInput;
}
