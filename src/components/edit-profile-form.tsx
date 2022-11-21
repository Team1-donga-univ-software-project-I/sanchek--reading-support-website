import { gql, useApolloClient, useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { useMe } from "../hooks/useMe";
import { editProfile, editProfileVariables } from "../__generated__/editProfile";

const EDIT_PROFILE_MUTATION = gql`
  mutation editProfile($input: EditProfileInput!) {
    editProfile(input: $input) {
      ok
      error
    }
  }
`;

interface EditProfileInterface {
  email?: string;
  password?: string;
  nickname?: string;
}

export const EditProfileForm = ({ setEditMode }: any) => {
  const { data: userData } = useMe();

  const { register, getValues, handleSubmit } = useForm<EditProfileInterface>({
    mode: "onChange",
    defaultValues: {
      email: userData?.me.email,
    },
  });

  const client = useApolloClient();
  const onCompleted = (data: editProfile) => {
    const {
      editProfile: { ok },
    } = data;
    if (ok && userData) {
      const {
        me: { email: prevEmail, id },
      } = userData;
      const { email: newEmail } = getValues();
      if (prevEmail !== newEmail) {
        client.writeFragment({
          id: `User:${id}`,
          fragment: gql`
            fragment EditedUser on User {
              email
            }
          `,
          data: {
            email: newEmail,
          },
        });
      }
    }
  };

  const [editProfile, { loading }] = useMutation<editProfile, editProfileVariables>(EDIT_PROFILE_MUTATION, {
    onCompleted,
  });

  const onSubmit = () => {
    if (!loading) {
      const { email, password, nickname } = getValues();

      editProfile({
        variables: {
          input: {
            email,
            ...(nickname !== "" && { nickname }),
            ...(password !== "" && { password }),
          },
        },
      });

      setEditMode(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: "Email is required",
        })}
        name="email"
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", {
          required: false,
        })}
        name="password"
        type="password"
        placeholder="Password"
      />
      <input
        {...register("nickname", {
          required: false,
        })}
        name="nickname"
        type="nickname"
        placeholder="Nickname"
      />
      <button>Edit Profile</button>
    </form>
  );
};
