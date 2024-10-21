import React from "react";
import { Box, Heading, Highlight, Text } from "@chakra-ui/react";

const MyHighlight = () => {
  return (
    <div>
      <Highlight
        query="spotlight"
        styles={{ px: "1", py: "1", bg: "orange.100" }}
      >
        With the Highlight component, you can spotlight words.
      </Highlight>
      <Heading lineHeight="tall">
        <Highlight
          query="spotlight"
          styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
        >
          With the Highlight component, you can spotlight words.
        </Highlight>
      </Heading>
      <Heading lineHeight="tall">
        <Highlight
          query={["spotlight", "emphasize", "Accentuate"]}
          styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
        >
          With the Highlight component, you can spotlight, emphasize and
          accentuate words.
        </Highlight>
      </Heading>
      <Box>
        <Text>Search result for: "spot"</Text>
        <Text mt="6" fontWeight="bold">
          <Highlight query="spot" styles={{ py: "1", fontWeight: "normal" }}>
            Spotlight bulb
          </Highlight>
        </Text>
        <Text fontWeight="bold">
          <Highlight query="spot" styles={{ py: "1", fontWeight: "normal" }}>
            Spot cleaner
          </Highlight>
        </Text>
        <Text fontWeight="bold">
          <Highlight query="spot" styles={{ py: "1", fontWeight: "normal" }}>
            Spot ceiling
          </Highlight>
        </Text>
      </Box>
    </div>
  );
};

export default MyHighlight;
