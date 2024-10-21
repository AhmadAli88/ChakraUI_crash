import React from "react";
import { Box, Image } from "@chakra-ui/react";
const MyImage = () => {
  return (
    <div>
      <Box boxSize="sm">
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Box>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
    </div>
  );
};

export default MyImage;
