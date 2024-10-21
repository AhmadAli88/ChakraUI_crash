import React from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const MyRadio = () => {
  const [value, setValue] = React.useState("1");
  return (
    <div>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row">
          <Radio value="1">First</Radio>
          <Radio value="2">Second</Radio>
          <Radio value="3">Third</Radio>
        </Stack>
      </RadioGroup>
      <RadioGroup defaultValue="2" mt={10}>
        <Stack spacing={5} direction="row">
          <Radio colorScheme="red" value="1">
            Radio
          </Radio>
          <Radio colorScheme="green" value="2">
            Radio
          </Radio>
        </Stack>
      </RadioGroup>
      <Stack mt={10}>
        <Radio size="sm" name="1" colorScheme="red">
          Radio
        </Radio>
        <Radio size="md" name="1" colorScheme="green">
          Radio
        </Radio>
        <Radio size="lg" name="1" colorScheme="orange" defaultChecked>
          Radio
        </Radio>
      </Stack>
    </div>
  );
};

export default MyRadio;
