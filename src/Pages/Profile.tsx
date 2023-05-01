import React from "react";
import useFetchUser from "../Hooks/useFetchUser";
import { useAuthUser } from "react-auth-kit";

function Profile() {
  const auth = useAuthUser();
  const apiKey = auth()?.apiKey;
  const userId = auth()?.userId;
  const { userData, isLoading, isError } = useFetchUser(userId);

  return <>{userData?.email}</>;
}

export default Profile;
