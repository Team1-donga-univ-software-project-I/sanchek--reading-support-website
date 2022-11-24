import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { SANCHEK_FRAGMENT } from "../fragments";
import { sanchekByIdQuery, sanchekByIdQueryVariables } from "../__generated__/sanchekByIdQuery";
import { Helmet } from "react-helmet-async";

const SANCHEK_QUERY = gql`
  query sanchekByIdQuery($input: SanchekInput!) {
    findSanchekById(input: $input) {
      ok
      error
      sanchek {
        ...SanchekParts
      }
    }
  }
  ${SANCHEK_FRAGMENT}
`;

interface SanchekParams {
  id: string;
}

export const SanchekPage = () => {
  const { id } = useParams<keyof SanchekParams>() as SanchekParams;

  const { data, loading } = useQuery<sanchekByIdQuery, sanchekByIdQueryVariables>(SANCHEK_QUERY, {
    variables: {
      input: {
        sanchekId: +id,
      },
    },
  });

  console.log(data);
  return (
    <>
      <Helmet>
        <title>산책 | {data?.findSanchekById.sanchek?.title || ""}</title>
      </Helmet>
    </>
  );
};
