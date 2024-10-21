import React from "react";
import { Select, Stack } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";

const MySelect = () => {
  return (
    <div>
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Stack spacing={3} mt={10}>
        <Select placeholder="extra small size" size="xs" />
        <Select placeholder="small size" size="sm" />
        <Select placeholder="medium size" size="md" />
        <Select placeholder="large size" size="lg" />
      </Stack>
      <Select
        icon={<MdArrowDropDown />}
        placeholder="Woohoo! A new icon"
        mt={10}
      />
      <Stack spacing={3}>
        <Select variant="outline" placeholder="Outline" />
        <Select variant="filled" placeholder="Filled" />
        <Select variant="flushed" placeholder="Flushed" />
        <Select variant="unstyled" placeholder="Unstyled" />
      </Stack>
    </div>
  );
};

export default MySelect;
