import { SimpleGrid } from "@chakra-ui/react";
import { JobDataSchema } from "../Hooks/useFetchJobs";
import JobCard from "./JobCard";

interface props {
  jobData: JobDataSchema[];
}

function JobGrid({ jobData }: props) {
  return (
    <>
      <SimpleGrid columns={1} padding={10}>
        {jobData.map((data) => (
          <JobCard
            key={data._id}
            employment_type={data.employment_type}
            jobTitle={data.title}
            jobDescription={data.job_description}
            jobType={data.job_type}
            joblocation={data.location}
            companyImg=""
            companyName={"Company Example"}
            applicationTime={data.updatedAt}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default JobGrid;
