import { Box, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface CheckboxProps {
  message?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ message }) => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Box>
      <Box
        overflow={`hidden`}
        pos={`relative`}
        display={`block`}
        my={`10px`}
        minW={`180px`}
      >
        <Input
          type={`checkbox`}
          variant="unstyled"
          m={`4px 0 0`}
          verticalAlign={`middle`}
          mt={`1px`}
          mr={`15px`}
          display={`inline-block`}
          pos={`absolute`}
          top={0}
          opacity={0.01}
          ml={`-20px`}
          outline={`5px auto -webkit-focus-ring-color`}
          outlineOffset={`-2px`}
          lineHeight={`normal`}
          p={0}
          boxSizing={`border-box`}
          w={`auto`}
          style={{
            WebkitAppearance: `checkbox`,
          }}
        />
        <Text
          as={`label`}
          p={`0 0 0 31px`}
          outline={`none`}
          display={`block`}
          m={0}
          cursor={`pointer`}
          minH={`26px`}
          fontWeight={400}
          maxW={`100%`}
          onClick={() => setShowMessage(!showMessage)}
          _hover={{
            textDecor: `underline`,
            color: `#002a54`,
          }}
          _focus={{
            textDecor: `underline`,
            color: `#002a54`,
          }}
          _before={{
            borderRadius: `6px`,
            m: `0 10px 0 0`,
            ml: `-31px`,
            content: `""`,
            display: `inline-block`,
            border: `1px solid`,
            h: `20px`,
            w: `20px`,
            pos: `relative`,
            top: `4px`,
            bgColor: `transparent`,
            ...(showMessage
              ? {
                  bgRepeat: `no-repeat`,
                  bgPos: `50%`,
                  bgColor: `#056dae`,
                  border: `none`,
                  bgImage: `data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%0A%3Csvg%20width%3D%2211px%22%20height%3D%228px%22%20viewBox%3D%220%200%2011%208%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20xmlns%3Asketch%3D%22http%3A//www.bohemiancoding.com/sketch/ns%22%3E%0A%20%20%20%20%3C%21--%20Generator%3A%20Sketch%203.4.1%20%2815681%29%20-%20http%3A//www.bohemiancoding.com/sketch%20--%3E%0A%20%20%20%20%3Ctitle%3ECheck%3C/title%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C/desc%3E%0A%20%20%20%20%3Cdefs%3E%3C/defs%3E%0A%20%20%20%20%3Cg%20id%3D%22Toolkit/Grey-Background%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20sketch%3Atype%3D%22MSPage%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Smaller-Items%22%20sketch%3Atype%3D%22MSArtboardGroup%22%20transform%3D%22translate%28-674.000000%2C%20-318.000000%29%22%20fill%3D%22%23FFFFFF%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20sketch%3Atype%3D%22MSLayerGroup%22%20transform%3D%22translate%28190.000000%2C%20261.000000%29%22%20id%3D%22Check-Boxes%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%28480.000000%2C%200.000000%29%22%20sketch%3Atype%3D%22MSShapeGroup%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Selected%22%20transform%3D%22translate%280.000000%2C%2040.000000%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12.7701802%2C21.5033045%20L13.4023073%2C22.0998705%20C13.5153816%2C22.2069223%2013.5181599%2C22.377733%2013.4086972%2C22.4811115%20L9.75725639%2C25.9240706%20C9.64779372%2C26.0277114%209.4672081%2C26.0248252%209.35413372%2C25.9180358%20L8.57567081%2C25.1828416%20C8.46259643%2C25.0760522%208.45981819%2C24.9055039%208.56928085%2C24.801863%20L11.2493834%2C22.2745907%20L6.07969963%2C17.1857704%20C5.97107043%2C17.0834415%205.97384867%2C16.9147299%206.08581176%2C16.8087276%20L6.8564956%2C16.0811425%20C6.96845868%2C15.9754026%207.14709953%2C15.9725164%207.25572873%2C16.0753701%20L12.7701802%2C21.5033045%20Z%22%20id%3D%22Check%22%20transform%3D%22translate%289.744495%2C%2021.000000%29%20rotate%28-270.000000%29%20translate%28-9.744495%2C%20-21.000000%29%20%22%3E%3C/path%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E`,
                }
              : {}),
          }}
        >
          Remember User ID
        </Text>
      </Box>
      {message && showMessage ? (
        <Box>
          <Box>
            <Text
              as={`small`}
              fontSize={`12px`}
              lineHeight={`18px`}
              color={`#333`}
            >
              {message}
            </Text>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
