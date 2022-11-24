import { gql } from "@apollo/client";

export const SANCHEK_FRAGMENT = gql`
  fragment SanchekParts on Sanchek {
    id
    title
    content
    isOpend
    author {
      nickname
    }
    likedCount
    bookName
  }
`;
