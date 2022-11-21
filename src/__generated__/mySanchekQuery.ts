/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindSanchekByUserInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: mySanchekQuery
// ====================================================

export interface mySanchekQuery_findSanchekByUser_sancheks {
  __typename: "Sanchek";
  title: string;
  content: string;
}

export interface mySanchekQuery_findSanchekByUser {
  __typename: "FindSanchekByUserOutput";
  ok: boolean;
  error: string | null;
  sancheks: mySanchekQuery_findSanchekByUser_sancheks[] | null;
  totalPages: number | null;
  totalResults: number | null;
}

export interface mySanchekQuery {
  findSanchekByUser: mySanchekQuery_findSanchekByUser;
}

export interface mySanchekQueryVariables {
  findSanchekByUserInput: FindSanchekByUserInput;
}
