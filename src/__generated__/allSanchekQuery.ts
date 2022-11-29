/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AllSancheksInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: allSanchekQuery
// ====================================================

export interface allSanchekQuery_allSancheks_results_author {
  __typename: "User";
  nickname: string;
  email: string;
}

export interface allSanchekQuery_allSancheks_results {
  __typename: "Sanchek";
  id: number;
  title: string;
  content: string;
  author: allSanchekQuery_allSancheks_results_author;
  createdAt: any;
}

export interface allSanchekQuery_allSancheks {
  __typename: "AllSancheksOutput";
  ok: boolean;
  error: string | null;
  results: allSanchekQuery_allSancheks_results[] | null;
  totalPages: number | null;
  totalResults: number | null;
}

export interface allSanchekQuery {
  allSancheks: allSanchekQuery_allSancheks;
}

export interface allSanchekQueryVariables {
  input: AllSancheksInput;
}
