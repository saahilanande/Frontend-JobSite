import { SimpleGrid } from "@chakra-ui/react";
import { JobDataSchema } from "../Hooks/useFetchJobs";
import JobCard from "./JobCard";
import SkeletonCard from "./SkeletonCard";

interface props {
  jobData: JobDataSchema[];
  jobloading: boolean;
}

function JobGrid({ jobData, jobloading }: props) {
  if (jobloading) return <SkeletonCard />;
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
