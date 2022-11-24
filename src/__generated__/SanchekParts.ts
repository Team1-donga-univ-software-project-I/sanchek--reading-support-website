/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SanchekParts
// ====================================================

export interface SanchekParts_author {
  __typename: "User";
  nickname: string;
}

export interface SanchekParts {
  __typename: "Sanchek";
  id: number;
  title: string;
  content: string;
  isOpend: boolean;
  author: SanchekParts_author;
  likedCount: number;
  bookName: string | null;
}
