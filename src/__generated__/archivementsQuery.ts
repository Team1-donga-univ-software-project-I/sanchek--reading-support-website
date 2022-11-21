/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: archivementsQuery
// ====================================================

export interface archivementsQuery_userArchivements_archivements {
  __typename: "Archivements";
  archivement1: boolean;
  archivement2: boolean;
  archivement3: boolean;
  archivement4: boolean;
}

export interface archivementsQuery_userArchivements {
  __typename: "UserArchivementsOutput";
  ok: boolean;
  error: string | null;
  archivements: archivementsQuery_userArchivements_archivements | null;
}

export interface archivementsQuery {
  userArchivements: archivementsQuery_userArchivements;
}
