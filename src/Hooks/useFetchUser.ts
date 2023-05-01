import { useEffect, useState } from "react";
import ApiClient from "../Service/Api-Client";

interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: number;
  location: string;
}

interface Skill {}

const useFetchUser = (userId: string) => {
  const [userData, setUserdata] = useState<User>();
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setisLoading(true);
    ApiClient.get("/user/" + userId, {
      params: {
        api_key: "saahil",
      },
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
