import { SimpleGrid } from "@chakra-ui/react";
import { JobDataSchema } from "../Hooks/useFetchJobs";
import JobCard from "./JobCard";
import SkeletonCard from "./SkeletonCard";
import useFetchApplied from "../Hooks/useFetchApplied";
import NoDataFound from "./NoDataFound";

interface props {
  jobData: JobDataSchema[];
  jobloading: boolean;
  userId: string;
  onMyJobClicked: boolean;
  myJob: boolean;
}

function JobGrid({
  jobData,
  jobloading,
  userId,
  onMyJobClicked,
  myJob,
}: props) {
  const appliedJobIds: string[] = [];
  const { appliedJobData, isAppliedLoading, isAppliedError } = useFetchApplied(
    userId,
    myJob
  );

  appliedJobData.map((data) => {
    appliedJobIds.push(data.job_id);
  });

  if (jobloading || isAppliedLoading) return <SkeletonCard />;
  if (jobData.length === 0)
    return <NoDataFound heading="No Job Posting Found !" />;
  return (
    <>
      {onMyJobClicked ? (
        <SimpleGrid columns={1} padding={10}>
          {jobData.map(
            (data) =>
              appliedJobIds.includes(data._id) && (
                <JobCard
                  key={data._id}
                  jobData={data}
                  appliedJobId={appliedJobIds}
                />
              )
          )}
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={1} padding={10}>
          {jobData.map((data) => (
            <JobCard
              key={data._id}
              jobData={data}
              appliedJobId={appliedJobIds}
            />
          ))}
        </SimpleGrid>
      )}
    </>
  );
}

export default JobGrid;
