import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArchivementList } from "../components/archivement-list";
import { EditProfileForm } from "../components/edit-profile-form";
import { LogoBox } from "../components/logo-box";
import { useMe } from "../hooks/useMe";
import { mySanchekQuery, mySanchekQueryVariables } from "../__generated__/mySanchekQuery";

const MY_SANCHEK_LIST = gql`
  query mySanchekQuery($findSanchekByUserInput: FindSanchekByUserInput!) {
    findSanchekByUser(input: $findSanchekByUserInput) {
      ok
      error
      sancheks {
        title
        content
      }
      totalPages
      totalResults
    }
  }
`;

export const MyProfile = () => {
  let { data: userData } = useMe();

  const { data } = useQuery<mySanchekQuery, mySanchekQueryVariables>(MY_SANCHEK_LIST, {
    variables: {
      findSanchekByUserInput: {
        page: 1,
      },
    },
  });

  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <Helmet>
        <title>산책 | 프로필</title>
      </Helmet>
      <LogoBox width="200px" />
      <div>my profile</div>
      <button onClick={() => setEditMode(!editMode)}>Edit</button>
      {editMode ? (
        <EditProfileForm setEditMode={setEditMode} />
      ) : (
        <>
          <p>닉네임:{userData?.me.nickname}</p>
          <p>이메일:{userData?.me.email}</p>
        </>
      )}
      <p>내가 쓴글 : {data?.findSanchekByUser.totalResults}</p>
      {data?.findSanchekByUser.sancheks?.map(sanchek => (
        <div key={sanchek.title}>
          <div>{sanchek.title}</div>
          <div>{sanchek.content}</div>
        </div>
      ))}
      <p>나의 업적</p>
      <ArchivementList />
    </>
  );
};
