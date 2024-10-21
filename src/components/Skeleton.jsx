import React from "react";
import {
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const MySkeleton = () => {
  return (
    <div>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
      <Box padding="6" boxShadow="lg" bg="white" mt={10}>
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
      <Skeleton isLoaded>
        <span>Chakra ui is cool</span>
      </Skeleton>
    </div>
  );
};

export default MySkeleton;
