import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface IntroTextProps {
  title: string;
  paragraph?: string;
}

export const IntroText: React.FC<IntroTextProps> = ({ title, paragraph }) => {
  return (
    <>
      <Box as={`section`}>
        <Box
          fontSize={[`26px`, `42px`]}
          letterSpacing={0}
          lineHeight={[`32px`, `50px`]}
        >
          <Text
            as={`h1`}
            fontSize={[`26px`, `42px`]}
            letterSpacing={0}
            lineHeight={[`32px`, `50px`]}
            m={`0 0 1px`}
            mb={`20px`}
            fontFamily={`Interstate_Light,sans-serif`}
            fontWeight={400}
            color={`#333`}
          >
            {title}
          </Text>
        </Box>
      </Box>
      {paragraph ? (
        <Box as={`section`}>
          <Box as={`section`}>
            <Box
              w={[`100%`, `80%`]}
              mt={`1%`}
              fontSize={[`21px`, `26px`]}
              letterSpacing={0}
              lineHeight={[`27px`, `32px`]}
            >
              <Text
                as={`h2`}
                w={[`100%`, `80%`]}
                mt={`1%`}
                fontSize={[`21px`, `26px`]}
                letterSpacing={0}
                lineHeight={[`27px`, `32px`]}
                mb={`20px`}
                fontFamily={`Interstate_Light,sans-serif`}
                fontWeight={400}
                color={`#333`}
              >
                {paragraph}
              </Text>
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
};
