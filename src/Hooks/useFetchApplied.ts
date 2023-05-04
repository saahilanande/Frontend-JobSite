import { useEffect, useState } from "react";
import ApiClient from "../Service/Api-Client";
import { useAuthHeader, useAuthUser } from "react-auth-kit";

export interface AppliedJob {
  job_id: string;
  user_id: string;
  application_date: string;
}

const useFetchApplied = (userId: string, myJob: boolean) => {
  const [appliedJobData, setAppliedJobData] = useState<AppliedJob[]>([]);
  const [isAppliedLoading, setisAppliedLoading] = useState(false);
  const [isAppliedError, setisAppliedError] = useState("");
  const auth = useAuthUser();
  const apiKey = auth()?.apiKey;
  const authHeader = useAuthHeader();

  useEffect(() => {
    setisAppliedLoading(true);
    ApiClient.get("/application/applied/" + userId, {
      params: {
        api_key: apiKey,
      },
      headers: { Authorization: authHeader() },
    })
      .then((res) => {
        setAppliedJobData(res.data);
        setisAppliedLoading(false);
      })
      .catch((err) => {
        setisAppliedError(err.message);
        setisAppliedLoading(false);
      });
  }, [myJob]);

  return { appliedJobData, isAppliedLoading, isAppliedError };
};

export default useFetchApplied;
