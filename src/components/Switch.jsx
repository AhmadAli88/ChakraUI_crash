import React from "react";
import { FormControl, FormLabel, Stack, Switch } from "@chakra-ui/react";

const MySwitch = () => {
  return (
    <div>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          Enable email alerts?
        </FormLabel>
        <Switch id="email-alerts" />
      </FormControl>
      <Stack align="center" direction="row">
        <Switch size="sm" />
        <Switch size="md" />
        <Switch size="lg" />
      </Stack>
    </div>
  );
};

export default MySwitch;
