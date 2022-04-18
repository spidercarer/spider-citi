import { Box, BoxProps, Image } from "@chakra-ui/react";
import React from "react";

interface LoadingProps extends BoxProps {}

export const Loading: React.FC<LoadingProps> = ({ ...props }) => {
  return (
    <Box
      w={`full`}
      h={`full`}
      pos={`fixed`}
      bgColor={`#fff`}
      display={`flex`}
      alignItems={`center`}
      justifyContent={`center`}
      zIndex={12000}
      opacity={0.8}
      {...props}
    >
      <Image
        src={`/images/jamp-spinner-2x.gif`}
        alt={``}
        w={`20px`}
        h={`20px`}
      />
    </Box>
  );
};
