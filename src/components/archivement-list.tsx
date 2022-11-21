import React from "react";
import { gql, useQuery } from "@apollo/client";
import { archivementsQuery } from "../__generated__/archivementsQuery";

const MY_ARCHIVEMENT_LIST = gql`
  query archivementsQuery {
    userArchivements {
      ok
      error
      archivements {
        archivement1
        archivement2
        archivement3
        archivement4
      }
    }
  }
`;

export const ArchivementList = () => {
  const { data }: any = useQuery<archivementsQuery>(MY_ARCHIVEMENT_LIST);
  return (
    <div>
      {data?.archivement1 ? <div>업적1 완료</div> : <div>업적1 미완료</div>}
      {data?.archivement2 ? <div>업적2 완료</div> : <div>업적2 미완료</div>}
      {data?.archivement3 ? <div>업적3 완료</div> : <div>업적3 미완료</div>}
      {data?.archivement4 ? <div>업적4 완료</div> : <div>업적4 미완료</div>}
    </div>
  );
};
