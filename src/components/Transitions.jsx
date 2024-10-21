import React from "react";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";

const Transitions = () => {
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

export default Transitions;
