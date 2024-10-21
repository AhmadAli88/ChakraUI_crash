import React from "react";
import { Box, Button, HStack, Tag, Tooltip, VStack } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
const MyTooltip = () => {
  return (
    <div>
      <Tooltip label="Hover me">
        <Button>Tag Here</Button>
      </Tooltip>
      <Tooltip label="Phone number" fontSize="md">
        <PhoneIcon />
      </Tooltip>
      <VStack spacing={6}>
        <HStack spacing={6}>
          <Tooltip label="Auto start" placement="auto-start">
            <Button>Auto-Start</Button>
          </Tooltip>

          <Tooltip label="Auto" placement="auto">
            <Button>Auto</Button>
          </Tooltip>

          <Tooltip label="Auto end" placement="auto-end">
            <Button>Auto-End</Button>
          </Tooltip>
        </HStack>

        <HStack spacing={6}>
          <Tooltip label="Top start" placement="top-start">
            <Button>Top-Start</Button>
          </Tooltip>

          <Tooltip label="Top" placement="top">
            <Button>Top</Button>
          </Tooltip>

          <Tooltip label="Top end" placement="top-end">
            <Button>Top-End</Button>
          </Tooltip>
        </HStack>

        <HStack spacing={6}>
          <Tooltip label="Right start" placement="right-start">
            <Button>Right-Start</Button>
          </Tooltip>

          <Tooltip label="Right" placement="right">
            <Button>Right</Button>
          </Tooltip>

          <Tooltip label="Right end" placement="right-end">
            <Button>Right-End</Button>
          </Tooltip>
        </HStack>

        <HStack spacing={6}>
          <Tooltip label="Bottom start" placement="bottom-start">
            <Button>Bottom Start</Button>
          </Tooltip>

          <Tooltip label="Bottom" placement="bottom">
            <Button>Bottom</Button>
          </Tooltip>

          <Tooltip label="Bottom end" placement="bottom-end">
            <Button>Bottom End</Button>
          </Tooltip>
        </HStack>

        <HStack spacing={6}>
          <Tooltip label="Left start" placement="left-start">
            <Button>Left-Start</Button>
          </Tooltip>

          <Tooltip label="Left" placement="left">
            <Button>Left</Button>
          </Tooltip>

          <Tooltip label="Left end" placement="left-end">
            <Button>Left-End</Button>
          </Tooltip>
        </HStack>
      </VStack>
    </div>
  );
};

export default MyTooltip;
