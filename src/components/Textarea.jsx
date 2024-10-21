import React from "react";
import { Radio, RadioGroup, Stack, Textarea } from "@chakra-ui/react";

const MyTextarea = () => {
  const [resize, setResize] = React.useState('horizontal')
  return (
    <div>
      <Textarea placeholder="Here is a sample placeholder" />
      <RadioGroup defaultValue={resize} onChange={setResize} mb={6}>
        <Stack direction="row" spacing={5}>
          <Radio value="horizontal">Horizontal</Radio>
          <Radio value="vertical">Vertical</Radio>
          <Radio value="none">None</Radio>
        </Stack>
      </RadioGroup>

      <Textarea
        placeholder="Here is a sample placeholder"
        size="sm"
        resize={resize}
      />
    </div>
  );
};

export default MyTextarea;
