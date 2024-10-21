import React from "react";
import { HStack, PinInput, PinInputField, Stack } from "@chakra-ui/react";

const MyPinInput = () => {
  return (
    <div>
      <HStack mt={10}>
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <HStack mt={10}>
        <PinInput type="alphanumeric">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Stack mt={10}>
        <HStack>
          <PinInput size="xs">
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        <HStack>
          <PinInput size="sm">
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        <HStack>
          <PinInput size="md">
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        <HStack>
          <PinInput size="lg">
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </Stack>
      <HStack mt={10}>
        <PinInput defaultValue="234">
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <HStack>
        <PinInput placeholder="🥳">
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </div>
  );
};

export default MyPinInput;
