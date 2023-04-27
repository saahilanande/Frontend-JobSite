import { useEffect } from "react";
import ApiClient from "../Service/Api-Client";

const useFetchApplied = (userId: string) => {
  useEffect(() => {
    ApiClient.get("/post/" + userId);
  }, []);
};

export default useFetchApplied;
