import { Box } from "@chakra-ui/react";
import React from "react";

interface SectionProps {}

export const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <Box as={`section`} ml={[0, `1.2%`]} display={`block`}>
      <Box as={`section`} w={[`100%`, `88%`]} display={`block`}>
        {children}
      </Box>
    </Box>
  );
};
