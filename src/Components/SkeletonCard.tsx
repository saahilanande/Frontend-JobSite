import { Stack, Skeleton } from "@chakra-ui/react";

function SkeletonCard() {
  const skeletonArray = [1, 2, 3, 4, 5, 6];
  return (
    <Stack padding={10} spacing={2}>
      {skeletonArray.map((id) => (
        <Skeleton height="100px" width={"600px"} key={id} />
      ))}
    </Stack>
  );
}

export default SkeletonCard;
