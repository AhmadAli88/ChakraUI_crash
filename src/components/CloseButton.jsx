import { CloseButton, Stack } from "@chakra-ui/react";
import React from "react";

const MyCloseButton = () => {
  return (
    <div>
      <Stack direction="row" spacing={6}>
        <CloseButton size="sm" />
        <CloseButton size="md" />
        <CloseButton size="lg" />
      </Stack>
    </div>
  );
};

export default MyCloseButton;
