/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateAccountInput {
  email: string;
  password: string;
  nickname: string;
}

export interface CreateSanchekInput {
  title: string;
  content: string;
  isOpend: boolean;
  bookName?: string | null;
}

export interface EditProfileInput {
  email?: string | null;
  password?: string | null;
  nickname?: string | null;
}

export interface FindSanchekByUserInput {
  page?: number | null;
}

export interface LoginInput {
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
