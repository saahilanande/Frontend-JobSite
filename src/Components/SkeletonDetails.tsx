import { Stack, Skeleton } from "@chakra-ui/react";

function SkeletonDetails() {
  return (
    <Stack>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
}

export default SkeletonDetails;
