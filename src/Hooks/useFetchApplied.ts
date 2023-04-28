import { useEffect, useState } from "react";
import ApiClient from "../Service/Api-Client";

interface AppliedJob {
  job_id: string;
  user_id: string;
  application_date: string;
}

const useFetchApplied = (userId: string) => {
  const [appliedJobData, setAppliedJobData] = useState<AppliedJob[]>([]);
  const [isAppliedLoading, setisAppliedLoading] = useState(false);
  const [isAppliedError, setisAppliedError] = useState("");

  useEffect(() => {
    setisAppliedLoading(true);
    ApiClient.get("/application/" + userId)
      .then((res) => {
        setAppliedJobData(res.data);
        setisAppliedLoading(false);
      })
      .catch((err) => {
        setisAppliedError(err.message);
        setisAppliedLoading(false);
      });
  }, []);

  return { appliedJobData, isAppliedLoading, isAppliedError };
};

export default useFetchApplied;
