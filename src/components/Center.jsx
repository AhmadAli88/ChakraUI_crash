import React from "react";
import { Center, Square, Circle, HStack, Box } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

const MyCenter = () => {
  return (
    <div>
      <Center bg="tomato" h="100px" color="white" mb="3">
        This is the Center
      </Center>
      <HStack>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <PhoneIcon />
        </Center>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <Box as="span" fontWeight="bold" fontSize="lg">
            1
          </Box>
        </Center>
      </HStack>
     
        <HStack className="mt-8">
          <Circle size="40px" bg="tomato" color="white">
            <PhoneIcon />
          </Circle>
          <Square size="40px" bg="purple.700" color="white">
            <PhoneIcon />
          </Square>
        </HStack>
     
    </div>
  );
};

export default MyCenter;
