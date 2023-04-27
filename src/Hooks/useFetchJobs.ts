import { useEffect, useState } from "react";
import ApiClient from "../Service/Api-Client";

export interface JobDataSchema {
  _id: string;
  title: string;
  job_description: string;
  job_type: string;
  location: string;
  salary: number;
  employment_type: string;
  updatedAt: Date;
}

const useFetchJobs = (
  apikey: string,
  jobTypeFilterList: string[],
  empTypeFilterList: string[]
) => {
  const [jobData, setJobData] = useState<JobDataSchema[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setisLoading(true);
    ApiClient.get("/post", {
      params: {
        api_key: apikey,
        job_type: jobTypeFilterList,
        employment_type: empTypeFilterList,
      },
      paramsSerializer: {
        indexes: null,
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
  }, [jobTypeFilterList, empTypeFilterList]);

  return { jobData, isLoading, isError };
};

export default useFetchJobs;
