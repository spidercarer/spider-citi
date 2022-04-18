import { Box } from "@chakra-ui/react";
import React from "react";

interface ContainerProps {}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box>
      <Box>
        <Box
          maxW={`1440px`}
          m={`0 auto`}
          minH={`650px`}
          p={`40px 20px 0`}
          bg={``}
        >
          <Box>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};
