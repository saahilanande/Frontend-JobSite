import { SimpleGrid } from "@chakra-ui/react";
import { JobDataSchema } from "../Hooks/useFetchJobs";
import JobCard from "./JobCard";

interface props {
  jobData: JobDataSchema[];
}

function JobGrid({ jobData }: props) {
  return (
    <>
      <SimpleGrid columns={1}>
        {jobData.map((data) => (
          <JobCard
            jobTitle={data.title}
            jobDescription={data.job_description}
            jobType={data.job_type}
            joblocation={data.location}
            companyImg=""
            companyName={"Company Example"}
            applicationTime={"TIME"}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default JobGrid;
