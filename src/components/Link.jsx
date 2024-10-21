import React from "react";
import { Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const MyLink = () => {
  return (
    <div>
      <Link href="https://chakra-ui.com" isExternal>
        Chakra Design system <ExternalLinkIcon mx="2px" />
      </Link>
      <Text>
        Did you know that{" "}
        <Link color="teal.500" href="#">
          links can live inline with text
        </Link>
      </Text>
      <ChakraLink as={ReactRouterLink} to="/tabs">
        Home
      </ChakraLink>
    </div>
  );
};

export default MyLink;
