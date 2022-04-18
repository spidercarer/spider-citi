import {
  Box,
  UnorderedList,
  ListItem,
  Link,
  BoxProps,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface GroupProps extends BoxProps {
  title?: string;
  navigations?: string[];
}

export const Group: React.FC<GroupProps> = ({
  title,
  navigations,
  children,
  ...props
}) => {
  const [maxH, setMaxH] = useState(0);
  return (
    <Box
      w={[`100%`, `16.6666%`]}
      pr={`20px`}
      borderTop={[`1px solid #666`, 0]}
      {...props}
    >
      {children ? (
        children
      ) : (
        <>
          <Box
            color={`#fff`}
            fontFamily={`Interstate_Bold,sans-serif`}
            p={0}
            mt={0}
            mb={`16px`}
            bg={`transparent`}
            border={`none`}
            fontSize={`14px`}
            lineHeight={`24px`}
            display={[`none`, `block`]}
            style={{
              textRendering: `optimizeLegibility`,
              WebkitFontSmoothing: `antialiased`,
            }}
          >
            {title}
          </Box>
          <Button
            variant={`unstyled`}
            display={[`block`, `none`]}
            px={0}
            textAlign={`left`}
            w={`100%`}
            m={0}
            p={`20px 0`}
            pos={`relative`}
            color={`#fff`}
            fontFamily={`Interstate_Bold,sans-serif`}
            bg={`transparent`}
            border={`none`}
            lineHeight={`24px`}
            outline={`none`}
            cursor={`pointer`}
            textTransform={`none`}
            overflow={`visible`}
            h={`auto`}
            onClick={() => setMaxH(maxH === 500 ? 0 : 500)}
            _after={{
              content: `""`,
              w: `20px`,
              h: `20px`,
              pos: `absolute`,
              right: `-15px`,
              top: `calc(50% - 10px)`,
              transition: `all .18s linear`,
              transform: maxH === 500 ? `rotate(-180deg)` : `rotate(0deg)`,
              bgImage: `/images/arrow-btn-down-white-sm.png`,
              backgroundPositionX: `50%`,
              backgroundPositionY: `center`,
              bgRepeat: `no-repeat`,
              style: {
                WebkitTapHighlightColor: `rgba(0,0,0,0)`,
              },
            }}
            style={{
              textRendering: `optimizeLegibility`,
              WebkitFontSmoothing: `antialiased`,
              WebkitAppearance: `button`,
              font: `inherit`,
              fontFamily: `Interstate_Bold,sans-serif`,
              fontSize: `14px`,
            }}
            _hover={{}}
            _focus={{}}
          >
            {title}
          </Button>
          {navigations ? (
            <UnorderedList
              p={0}
              m={0}
              maxHeight={[`${maxH}px`, `none`]}
              overflow={`hidden`}
              transition={`max-height .18s ease-in-out`}
            >
              {navigations.map((navigation) => {
                return (
                  <ListItem
                    key={navigation}
                    listStyleType={`none`}
                    fontSize={`12px`}
                    lineHeight={`18px`}
                    fontFamily={`Interstate_Light,sans-serif,Arial`}
                    color={`#333`}
                    mb={`9px`}
                  >
                    <Link
                      fontSize={`12px`}
                      lineHeight={`18px`}
                      textAlign={`initial`}
                      color={`#fff`}
                      textDecor={`none`}
                      whiteSpace={`normal`}
                      pl={0}
                      mr={0}
                    >
                      {navigation}
                    </Link>
                  </ListItem>
                );
              })}
            </UnorderedList>
          ) : null}
        </>
      )}
    </Box>
  );
};
