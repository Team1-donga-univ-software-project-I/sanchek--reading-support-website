import React, { Suspense } from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import moment from "moment";
import { allSanchekQuery, allSanchekQueryVariables } from "../__generated__/allSanchekQuery";
import { Link } from "react-router-dom";

const ALL_SANCHEK_LIST = gql`
  query allSanchekQuery($input: AllSancheksInput!) {
    allSancheks(input: $input) {
      ok
      error
      results {
        id
        title
        content
        author {
          nickname
          email
        }
        createdAt
      }
      totalPages
      totalResults
    }
  }
`;

export const MainSancheksList = () => {
  let { data } = useQuery<allSanchekQuery, allSanchekQueryVariables>(ALL_SANCHEK_LIST, {
    variables: {
      input: {
        page: 1,
      },
    },
  });

  return (
    <>
      <MainSanchekListContainer>
        <Suspense>
          {data?.allSancheks.results?.map(sanchek => (
            <MainListCard key={sanchek.id}>
              <MainListLink to={`/sanchek/${sanchek.id}`}>
                <MainListTitle>{sanchek.title}</MainListTitle>
                <MainListUser>
                  {sanchek.author.nickname} · {moment(sanchek.createdAt).format("YYYY.MM.DD")}
                </MainListUser>
                <MainListContent>{sanchek.content}</MainListContent>
              </MainListLink>
            </MainListCard>
          ))}
        </Suspense>
      </MainSanchekListContainer>
    </>
  );
};

const MainSanchekListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: masonry;
  padding: 30px 30px;
`;

const MainListCard = styled.li`
  height: 300px;
  margin: 10px 10px 30px 10px;
  padding: 20px;
  border-radius: 15px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const MainListLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus {
    color: black;
  }
`;

const MainListTitle = styled.h1`
  width: 95%;
  font-size: 18pt;
  font-family: "KOFIHDrLEEJWTTF-B";
  margin: 10px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const MainListUser = styled.p`
  color: #999999;
  margin-bottom: 10px;
`;

const MainListContent = styled.p`
  font-size: 13pt;
  line-height: 1.5;
  max-height: 210px;
  font-family: "KyoboHandwriting2020A";
  word-break: break-all;
  height: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
