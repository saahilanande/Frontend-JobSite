import { useEffect, useState } from "react";
import ApiClient from "../Service/Api-Client";

export interface JobDataSchema {
  _id: string;
  title: string;
  job_description: string;
  job_type: string;
  location: string;
  salary: number;
}

const useFetchJobs = (apikey: string) => {
  const [jobData, setJobData] = useState<JobDataSchema[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setisLoading(true);
    ApiClient.get("/post", {
      params: {
        api_key: apikey,
      },
    })
      .then((res) => {
        setJobData(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        setIsError(err.message);
        setisLoading(false);
      });
  }, []);

  return { jobData, isLoading, isError };
};

export default useFetchJobs;
