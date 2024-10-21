import React from "react";
import { Progress, Stack } from "@chakra-ui/react";
const MyProgress = () => {
  return (
    <div>
      <Progress hasStripe value={64} />
      <Stack spacing={5} mt={10}>
        <Progress colorScheme="green" size="sm" value={20} />
        <Progress colorScheme="green" size="md" value={20} />
        <Progress colorScheme="green" size="lg" value={20} />
        <Progress colorScheme="green" height="32px" value={20} />
        <Progress value={20} size='xs' colorScheme='pink' />
        <Progress size='xs' isIndeterminate />
      </Stack>
    </div>
  );
};

export default MyProgress;
