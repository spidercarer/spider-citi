import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface InputWrapperProps extends BoxProps {}

export const InputWrapper: React.FC<InputWrapperProps> = ({
  children,
  ...props
}) => {
  return (
    <Box
      w={[`100%`, `33.3333333333%`]}
      float={`left`}
      pos={`relative`}
      minH={`1px`}
      mb={`15px`}
      {...props}
    >
      {children}
    </Box>
  );
};
