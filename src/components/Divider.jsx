import React from "react";
import { AbsoluteCenter, Box, Center, Divider, Stack, Text } from "@chakra-ui/react";

const MyDivider = () => {
  return (
    <div>
      <Divider orientation="horizontal" />
      <Center height="200px" mt={5}>
        <Divider
          orientation="vertical"
          style={{ background: "red", width: "2px" }}
        />
      </Center>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="white" px="4">
          Content
        </AbsoluteCenter>
      </Box>
      <Stack direction="row" h="100px" p={4}>
        <Divider orientation="vertical" />
        <Text>Chakra UI</Text>
      </Stack>
    </div>
  );
};

export default MyDivider;
