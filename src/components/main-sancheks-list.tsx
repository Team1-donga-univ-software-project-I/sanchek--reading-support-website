import React from "react";
import { gql, useQuery } from "@apollo/client";
import { allSanchekQuery, allSanchekQueryVariables } from "../__generated__/allSanchekQuery";
import styled from "styled-components";

const ALL_SANCHEK_LIST = gql`
  query allSanchekQuery($input: AllSancheksInput!) {
    allSancheks(input: $input) {
      ok
      error
      results {
        title
        content
        author {
          nickname
          email
        }
      }
      totalPages
      totalResults
    }
  }
`;

export const MainSancheksList = () => {
  const { data } = useQuery<allSanchekQuery, allSanchekQueryVariables>(ALL_SANCHEK_LIST, {
    variables: {
      input: {
        page: 1,
      },
    },
  });

  console.log(data);

  return (
    <MainSanchekListContainer>
      {data?.allSancheks.results?.map(sanchek => (
        <li>
          <div>타이틀: {sanchek.title}</div>
          <div>콘텐츠: {sanchek.content}</div>
          <div>닉네임: {sanchek.author.nickname}</div>
        </li>
      ))}
    </MainSanchekListContainer>
  );
};

const MainSanchekListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;
