import React from "react";
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
const MyCheckbox = () => {
  return (
    <div>
      <Stack>
        <Checkbox defaultChecked>Checkbox</Checkbox>
        <Checkbox isDisabled>Checkbox</Checkbox>
        <Checkbox isDisabled defaultChecked>
          Checkbox
        </Checkbox>
        <Checkbox colorScheme="red" defaultChecked>
          Checkbox
        </Checkbox>
        <Checkbox colorScheme="green" defaultChecked>
          Checkbox
        </Checkbox>
        <Checkbox size="sm" colorScheme="red">
          Checkbox
        </Checkbox>
        <Checkbox size="md" colorScheme="green" defaultChecked>
          Checkbox
        </Checkbox>
        <Checkbox size="lg" colorScheme="orange" defaultChecked>
          Checkbox
        </Checkbox>
        <Checkbox isInvalid>Checkbox</Checkbox>
      </Stack>
      <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          <Checkbox value="naruto">Naruto</Checkbox>
          <Checkbox value="sasuke">Sasuke</Checkbox>
          <Checkbox value="kakashi">Kakashi</Checkbox>
        </Stack>
      </CheckboxGroup>
    </div>
  );
};

export default MyCheckbox;
