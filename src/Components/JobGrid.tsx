import { SimpleGrid } from "@chakra-ui/react";
import { JobDataSchema } from "../Hooks/useFetchJobs";
import JobCard from "./JobCard";
import SkeletonCard from "./SkeletonCard";
import useFetchApplied from "../Hooks/useFetchApplied";

interface props {
  jobData: JobDataSchema[];
  jobloading: boolean;
  userId: string;
}

function JobGrid({ jobData, jobloading, userId }: props) {
  const appliedJobIds: string[] = [];
  const { appliedJobData, isAppliedLoading, isAppliedError } =
    useFetchApplied(userId);

  appliedJobData.map((data) => {
    appliedJobIds.push(data.job_id);
  });

  if (jobloading) return <SkeletonCard />;
  return (
    <>
      <SimpleGrid columns={1} padding={10}>
        {jobData.map((data) => (
          <JobCard key={data._id} jobData={data} appliedJobId={appliedJobIds} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default JobGrid;
