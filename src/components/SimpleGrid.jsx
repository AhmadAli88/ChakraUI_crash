import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

const MySimpleGrid = () => {
  return (
    <div>
      {/* simple grid example */}
      <SimpleGrid columns={2} spacing={10}>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>

      {/* You can pass array or object in columns*/}
      <SimpleGrid columns={[2, null, 3]} spacing="40px" mt={5}>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
      {/* you can pass minChildWidth instead of columns */}
      <SimpleGrid minChildWidth="120px" spacing="40px" mt={5}>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
      {/* change spacing for rows and columns */}
      <SimpleGrid columns={2} spacingX="40px" spacingY="20px" mt={5}>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </div>
  );
};

export default MySimpleGrid;
