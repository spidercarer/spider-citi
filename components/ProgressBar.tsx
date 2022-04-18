import { Box, ListItem, OrderedList, Text } from "@chakra-ui/react";
import React from "react";

interface ProgressBarProps {
  indicators: string[];
  highlight: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  indicators,
  highlight,
}) => {
  return (
    <Box
      w={`100%`}
      float={`left`}
      pos={`relative`}
      minH={`1px`}
      px={[0, `10px`]}
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
      <OrderedList
        ml={0}
        display={`flex`}
        alignItems={`flex-end`}
        mb={`70px`}
        p={0}
        bgImage={`/images/progress-indicator-bg.png`}
        bgRepeat={`repeat-x`}
        bgPos={`bottom`}
        fontFamily={`Interstate_Light,sans-serif`}
        justifyContent={`space-between`}
      >
        {indicators.map((indicator, index) => {
          return (
            <ListItem
              key={index}
              color={
                highlight === index || indicators.indexOf(indicator) < highlight
                  ? `#056dae`
                  : `#767676`
              }
              textAlign={
                indicators.indexOf(indicator) === 0
                  ? `left`
                  : indicators.indexOf(indicator) === indicators.length - 1
                  ? `right`
                  : `center`
              }
              // flex={`0.5 1 0`}
              pb={`10px`}
              pos={`relative`}
              pl={0}
              mb={`9px`}
              listStyleType={`none`}
              style={{
                textIndent: 0,
              }}
              _before={{
                w: 0,
                content: `""`,
                h: `3px`,
                bgColor: highlight === index ? `#056dae` : `#767676`,
                pos: `absolute`,
                left: 0,
                top: `inherit`,
                bottom: `-10px`,
                mr: 0,
                fontFamily: `Interstate_Bold,sans-serif`,
                textAlign: `left`,
                color: `#464646`,
                style: {
                  WebkitFontSmoothing: `antialiased`,
                  counterIncrement: `li-counter`,
                },
              }}
              _after={{
                left:
                  indicators.indexOf(indicator) === 0
                    ? 0
                    : indicators.indexOf(indicator) === indicators.length - 1
                    ? `inherit`
                    : `calc(50% - 6px)`,
                right:
                  indicators.indexOf(indicator) === indicators.length - 1
                    ? 0
                    : `inherit`,
                content: `""`,
                width: highlight === index ? `20px` : `11px`,
                height: highlight === index ? `20px` : `11px`,
                bottom: highlight === index ? `-18px` : `-14px`,
                border: highlight === index ? `1px solid #056dae` : `none`,
                bgColor:
                  highlight === index ||
                  indicators.indexOf(indicator) < highlight
                    ? `#056dae`
                    : `#767676`,
                display: `block`,
                borderRadius: `11px`,
                pos: `absolute`,
                top: `auto`,
                boxShadow:
                  highlight === index ? `inset 0 0 0 3px #fff` : `none`,
              }}
            >
              <Text as={`span`} display={[`none`, `block`]}>
                {indicator}
              </Text>
            </ListItem>
          );
        })}
      </OrderedList>
    </Box>
  );
};
