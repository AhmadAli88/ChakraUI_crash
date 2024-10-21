import React from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { VisuallyHidden, VisuallyHiddenInput } from '@chakra-ui/react'
import { CheckIcon } from "@chakra-ui/icons";
const MyVisualHidden = () => {
  return (
    <div>
      {" "}
      <Button>
        <VisuallyHidden>Checkmark</VisuallyHidden>
        <CheckIcon />
      </Button>
      <Box>
      <Heading>Title and description</Heading>
      <VisuallyHidden>This will be hidden</VisuallyHidden>
    </Box>
    </div>
  );
};

export default MyVisualHidden;
