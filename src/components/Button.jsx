import React from "react";
import { Button, ButtonGroup, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners"; // Import BeatLoader
import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";

const MyButton = () => {
  return (
    <div>
      <Button colorScheme="blue" mt={5}>
        Button
      </Button>
      {/* button sizes */}
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>
      {/* button variants */}
      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="teal" variant="solid">
          Button
        </Button>
        <Button colorScheme="teal" variant="outline">
          Button
        </Button>
        <Button colorScheme="teal" variant="ghost">
          Button
        </Button>
        <Button colorScheme="teal" variant="link">
          Button
        </Button>
      </Stack>
      {/* button colorScheme */}
      <Wrap spacing={4} mt={5}>
        <WrapItem>
          <Button colorScheme="gray">Gray</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="red">Red</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="orange">Orange</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="yellow">Yellow</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="green">Green</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="teal">Teal</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="blue">Blue</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="cyan">Cyan</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="purple">Purple</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="pink">Pink</Button>
        </WrapItem>
      </Wrap>
      {/* button with loader */}
      <Stack direction="row" spacing={4} mt={5}>
        <Button isLoading colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button
          isLoading
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
        >
          Submit
        </Button>
        <Button
          isLoading
          loadingText="Loading"
          colorScheme="teal"
          variant="outline"
          spinnerPlacement="end"
        >
          Continue
        </Button>
      </Stack>
      <Button
        isLoading
        colorScheme="blue"
        spinner={<BeatLoader size={8} color="white" />} // Use BeatLoader
      >
        Click me
      </Button>
      <Button
        isLoading
        loadingText="Loading"
        colorScheme="teal"
        variant="outline"
        spinnerPlacement="end"
      >
        Continue
      </Button>
      {/* button with icons */}
      <Stack direction="row" spacing={4}>
        <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          Call us
        </Button>
      </Stack>
      {/* overriding styles */}
     
      <Button
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="green.500"
      >
        Button
      </Button>
    </div>
  );
};

export default MyButton;
