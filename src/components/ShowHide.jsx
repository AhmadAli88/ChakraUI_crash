import React from "react";
import { Show, Hide, Box } from "@chakra-ui/react";
const MyShowHide = () => {
  return (
    <div>
      <Show breakpoint="(max-width: 400px)">
        <Box>This text appears only on screens 400px and smaller.</Box>
      </Show>
      <Show above="sm">
        <Box>This text appears at the "sm" value screen width or greater.</Box>
      </Show>
      <Hide below="md">
        <Box>This text hides at the "md" value screen width and smaller.</Box>
      </Hide>
    </div>
  );
};

export default MyShowHide;
