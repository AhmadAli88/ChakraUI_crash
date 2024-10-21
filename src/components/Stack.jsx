import React from "react";
import { Stack, HStack, VStack, Box, StackDivider } from "@chakra-ui/react";

const MyStack = () => {
  return (
    <div>
      <HStack spacing="24px">
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </HStack>
      <Stack direction={["column", "row"]} spacing="24px" mt={5}>
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </Stack>

      <VStack
        mt={5}
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Box h="40px" bg="yellow.200">
          1
        </Box>
        <Box h="40px" bg="tomato">
          2
        </Box>
        <Box h="40px" bg="pink.100">
          3
        </Box>
      </VStack>
    </div>
  );
};

export default MyStack;
