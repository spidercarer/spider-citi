import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface AltButtonProps extends ButtonProps {
  text: string;
}

export const AltButton: React.FC<AltButtonProps> = ({ text, ...props }) => {
  return (
    <Button
      variant={`unstyled`}
      textAlign={`center`}
      color={`#056dae`}
      fontSize={`13px`}
      w={`100%`}
      whiteSpace={`pre-wrap`}
      float={`left`}
      textDecor={`underline`}
      lineHeight={`normal`}
      border={0}
      borderRadius={0}
      verticalAlign={`baseline`}
      fontFamily={`Interstate_Light,sans-serif`}
      fontWeight={400}
      p={0}
      m={0}
      mr={`20px`}
      boxShadow={`none`}
      mb={0}
      userSelect={`none`}
      textTransform={`none`}
      overflow={`visible`}
      h={`auto`}
      _focus={{
        outline: `5px auto -webkit-focus-ring-color`,
        outlineOffset: `-2px`,
      }}
      _hover={{
        color: `#002a54`,
      }}
      style={{
        touchAction: `manipulation`,
      }}
      {...props}
    >
      {text}
    </Button>
  );
};
