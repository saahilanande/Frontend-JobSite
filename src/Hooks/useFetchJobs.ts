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

export interface EmploymentFilters {
  fullTime: boolean;
  partTime: boolean;
  contract: boolean;
}

export interface JobTypeFilters {
  remote: boolean;
  onsite: boolean;
  hybrid: boolean;
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
