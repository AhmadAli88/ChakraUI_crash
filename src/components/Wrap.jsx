import React from "react";
import { Center, Wrap, WrapItem } from "@chakra-ui/react";

const MyWrap = () => {
  return (
    <div>
      <Wrap>
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 5
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 6
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 7
          </Center>
        </WrapItem>
      </Wrap>
      {/* Pass the spacing prop to apply consistent spacing between each child, even if it wraps. */}
      <Wrap spacing="30px" mt={5}>
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.500">
            Box 5
          </Center>
        </WrapItem>
      </Wrap>
      {/* Pass the justify prop to change the alignment of the child along the main axis. */}
      <Wrap spacing="30px" justify="center" mt={5}>
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="120px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.500">
            Box 5
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 6
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 7
          </Center>
        </WrapItem>
      </Wrap>
    </div>
  );
};

export default MyWrap;
