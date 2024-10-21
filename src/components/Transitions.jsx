import React from "react";
import { Fade, ScaleFade, Slide, SlideFade, Collapse, Box, Button, useDisclosure } from "@chakra-ui/react";

const MyTransitions = () => {
    const { isOpen, onToggle } = useDisclosure()
  return (
    <div>
      {" "}
      <Button onClick={onToggle}>Click Me</Button>
      <Fade in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          Fade
        </Box>
      </Fade>
    </div>
  );
};

export default MyTransitions;
