import {
  Box,
  Button as CUButton,
  ButtonProps as CUButtonProps,
} from "@chakra-ui/react";
import React from "react";

interface ButtonProps extends CUButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <Box
      mx={`-10px`}
      _before={{
        content: `" "`,
        display: `table`,
      }}
      _after={{
        clear: `both`,
        content: `" "`,
        display: `table`,
      }}
    >
      <Box
        pos={`relative`}
        display={`inline-block`}
        boxSizing={`border-box`}
        mb={`15px`}
        mt={`2px`}
        w={`100%`}
        float={`left`}
        minH={`1px`}
        px={`10px`}
      >
        <CUButton
          variant={`unstyled`}
          mt={`10px`}
          color={`#fff`}
          bgColor={`#056dae`}
          border={`1px solid transparent`}
          whiteSpace={`nowrap`}
          p={`6px 20px`}
          bg={`#056dae`}
          lineHeight={`46px`}
          borderWidth={`2px`}
          borderStyle={`solid`}
          minW={[`100%`, `220px`]}
          pos={`relative`}
          py={0}
          verticalAlign={`middle`}
          textAlign={`center`}
          font={`inherit`}
          fontSize={`1rem`}
          fontFamily={`Interstate_Bold,sans-serif`}
          fontWeight={700}
          borderRadius={`6px`}
          display={`block`}
          width={`100%`}
          textTransform={`none`}
          overflow={`visible`}
          m={0}
          h={`auto`}
          _hover={{
            color: `#fff`,
            bgColor: `#002a54`,
            bg: `#002a54`,
            textDecor: `none`,
          }}
          _active={{
            outline: `none`,
            color: `#fff`,
            bgColor: `#002a54`,
            bg: `#002a54`,
            textDecor: `none`,
            bgImage: `none`,
            boxShadow: `inset 0 3px 5px rgb(0 0 0 / 13%)`,
          }}
          _focus={{
            color: `#fff`,
            bgColor: `#002a54`,
            bg: `#002a54`,
            textDecor: `none`,
            bgImage: `none`,
            outline: `5px auto -webkit-focus-ring-color`,
            outlineOffset: `-2px`,
          }}
          _disabled={{
            bgColor: `rgba(0,0,0,0)`,
            borderColor: `#666`,
            color: `#666`,
            cursor: `default`,
            opacity: 0.65,
            boxShadow: `none`,
            _hover: {
              bgColor: `rgba(0,0,0,0)`,
              borderColor: `#666`,
              color: `#666`,
              cursor: `default`,
              opacity: 0.65,
              boxShadow: `none`,
            },
          }}
          style={{
            WebkitFontSmoothing: `antialiased`,
            touchAction: `manipulation`,
            userSelect: `none`,
            WebkitAppearance: `button`,
          }}
          w={[`100%`, `auto`]}
          {...props}
        >
          {text}
        </CUButton>
      </Box>
    </Box>
  );
};
