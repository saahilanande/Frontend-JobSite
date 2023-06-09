import { useEffect, useState } from "react";
import ApiClient from "../Service/Api-Client";
import { useAuthHeader, useAuthUser } from "react-auth-kit";

export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: number;
  location: string;
  skills: {
    skill_name: string;
    skill_level: number;
  }[];
}

const useFetchUser = (userId: string) => {
  const auth = useAuthUser();
  const apiKey = auth()?.apiKey;
  const [userData, setUserdata] = useState<User>();
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const authHeader = useAuthHeader();

  useEffect(() => {
    setisLoading(true);
    ApiClient.get<User>("/user/" + userId, {
      params: {
        api_key: apiKey,
      },
      headers: { Authorization: authHeader() },
    })
      .then((res) => {
        setUserdata(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        setIsError(err);
        setisLoading(false);
      });
  }, []);

  return { userData, isLoading, isError };
};
export default useFetchUser;
