import { Stack, Skeleton } from "@chakra-ui/react";

function SkeletonCard() {
  const skeletonArray = [1, 2, 3, 4, 5, 6];
  return (
    <Stack padding={10} spacing={2}>
      {skeletonArray.map((data) => (
        <Skeleton height="100px" width={"300px"} />
      ))}
    </Stack>
  );
}

export default SkeletonCard;
