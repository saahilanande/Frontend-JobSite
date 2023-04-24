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
          <JobCard key={data._id} jobData={data} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default JobGrid;
