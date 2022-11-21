/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateSanchekInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createSanchek
// ====================================================

export interface createSanchek_createSanchek {
  __typename: "CreateSanchekOutput";
  ok: boolean;
  error: string | null;
}

export interface createSanchek {
  createSanchek: createSanchek_createSanchek;
}

export interface createSanchekVariables {
  input: CreateSanchekInput;
}
