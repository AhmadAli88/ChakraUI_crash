import { CheckIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const MyInput = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)
  return (
    <div>
      <Stack spacing={3}>
        <Input placeholder="extra small size" size="xs" />
        <Input placeholder="small size" size="sm" />
        <Input placeholder="medium size" size="md" />
        <Input placeholder="large size" size="lg" />
        {/* use the native DOM size attribute */}
        <Input htmlSize={4} width="auto" />
      </Stack>
      <Stack spacing={3}>
        <Input variant="outline" placeholder="Outline" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="flushed" placeholder="Flushed" />
        <Input variant="unstyled" placeholder="Unstyled" />
      </Stack>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="gray.300" />
          </InputLeftElement>
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            $
          </InputLeftElement>
          <Input placeholder="Enter amount" />
          <InputRightElement>
            <CheckIcon color="green.500" />
          </InputRightElement>
        </InputGroup>
      </Stack>
      <Stack spacing={4} mt={5}>
        <InputGroup>
          <InputLeftAddon>+234</InputLeftAddon>
          <Input type="tel" placeholder="phone number" />
        </InputGroup>

        {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
        <InputGroup size="sm">
          <InputLeftAddon>https://</InputLeftAddon>
          <Input placeholder="mysite" />
          <InputRightAddon>.com</InputRightAddon>
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Stack>
      <Stack spacing={3}>
        <Input placeholder="default placeholder" />
        <Input
          placeholder="custom placeholder"
          _placeholder={{ opacity: 1, color: "gray.500" }}
        />
        <Input
          color="teal"
          placeholder="custom placeholder"
          _placeholder={{ color: "inherit" }}
        />
        <Input
          color="tomato"
          placeholder="custom placeholder"
          _placeholder={{ opacity: 0.4, color: "inherit" }}
        />
      </Stack>
      {/* Controlled Input */}
      <Text mb="8px">Value: {value}</Text>
      <Input 
      mt={5}
        value={value}
        onChange={handleChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
      <Input placeholder='Select Date and Time' size='md' type='datetime-local' />
    </div>
  );
};

export default MyInput;
