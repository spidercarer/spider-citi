import { Box, Flex, Link, Image, Button } from "@chakra-ui/react";
import React from "react";

interface HeaderProps {
  hideNav?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ hideNav }) => {
  return (
    <Box display={`block`}>
      <Box
        display={`block`}
        boxShadow={`0 1px 5px rgb(0 0 0 / 13%)`}
        position={`relative`}
        zIndex={10}
      >
        <Box
          h={[`72px`, `88px`]}
          bgColor={`#fff`}
          m={0}
          p={0}
          border={0}
          verticalAlign={`baseline`}
        >
          <Flex
            m={0}
            border={0}
            verticalAlign={`baseline`}
            h={`full`}
            p={[0, `0 35px 0 20px`]}
            pos={`relative`}
            justifyContent={`space-between`}
          >
            <Flex
              border={0}
              verticalAlign={`baseline`}
              cursor={`pointer`}
              m={0}
              p={0}
            >
              <Box
                m={0}
                p={0}
                border={0}
                verticalAlign={`baseline`}
                h={[`72px`, `88px`]}
                w={[`72px`, `88px`]}
                pl={[0, `20px`]}
              >
                <Link
                  border={0}
                  verticalAlign={`baseline`}
                  textDecor={`none`}
                  color={`#056dae`}
                  bgColor={`transparent`}
                  m={0}
                  p={0}
                  _focus={{
                    outline: `5px auto -webkit-focus-ring-color`,
                    outlineOffset: `-2px`,
                    color: `#002a54`,
                    textDecor: `none`,
                  }}
                >
                  <Image
                    m={0}
                    p={0}
                    border={0}
                    verticalAlign={`baseline`}
                    src={`/images/logo.png`}
                    alt={`Citi`}
                    h={[`72px`, `88px`]}
                    w={[`72px`, `88px`]}
                    maxW={`none`}
                    style={{
                      font: `inherit`,
                    }}
                  />
                </Link>
              </Box>
            </Flex>
            {!hideNav ? (
              <Flex
                m={0}
                p={0}
                border={0}
                verticalAlign={`baseline`}
                display={[`none`, `flex`]}
              >
                <Box
                  m={0}
                  p={0}
                  border={0}
                  verticalAlign={`baseline`}
                  style={{
                    font: `inherit`,
                  }}
                  pt={`27px`}
                  pb={`15px`}
                  pr={`24px`}
                  filter={`unset`}
                  _hover={{
                    filter: `invert(26%) sepia(84%) saturate(1912%) hue-rotate(190deg) brightness(75%) contrast(93%)`,
                  }}
                >
                  <Link
                    m={0}
                    p={0}
                    verticalAlign={`baseline`}
                    cursor={`pointer`}
                    bg={`none`}
                    color={`#056dae`}
                    textDecor={`none`}
                    border={`none`}
                    _hover={{
                      textDecor: `none`,
                      color: `#002a54`,
                      outline: 0,
                    }}
                  >
                    <Image
                      p={0}
                      border={0}
                      verticalAlign={`baseline`}
                      src={`/images/location2x.svg`}
                      alt={`ATM / BRANCH`}
                      h={`26px`}
                      w={`26px`}
                      m={`auto`}
                      display={`block`}
                    />
                    <Box
                      m={0}
                      p={0}
                      border={0}
                      verticalAlign={`baseline`}
                      as={`span`}
                      display={`block`}
                      pt={`8px`}
                      fontFamily={`Interstate_Regular,sans-serif`}
                      fontSize={`11px`}
                      color={`#666`}
                      letterSpacing={0}
                      textAlign={`center`}
                    >
                      ATM / BRANCH
                    </Box>
                  </Link>
                </Box>
                <Box
                  m={0}
                  p={0}
                  border={0}
                  verticalAlign={`baseline`}
                  style={{
                    font: `inherit`,
                  }}
                  pt={`27px`}
                  pb={`15px`}
                  pr={0}
                  filter={`unset`}
                  _hover={{
                    filter: `invert(26%) sepia(84%) saturate(1912%) hue-rotate(190deg) brightness(75%) contrast(93%)`,
                  }}
                >
                  <Button
                    m={0}
                    p={0}
                    verticalAlign={`baseline`}
                    cursor={`pointer`}
                    bg={`none`}
                    color={`#056dae`}
                    textDecor={`none`}
                    border={`none`}
                    variant={`unstyled`}
                    fontWeight={400}
                  >
                    <Image
                      p={0}
                      border={0}
                      verticalAlign={`baseline`}
                      src={`/images/globe2x.svg`}
                      alt={`ESPANOL`}
                      h={`26px`}
                      w={`26px`}
                      m={`auto`}
                      display={`block`}
                    />
                    <Box
                      as={`span`}
                      m={0}
                      p={0}
                      border={0}
                      verticalAlign={`baseline`}
                      display={`block`}
                      pt={`8px`}
                      fontFamily={`Interstate_Regular`}
                      fontSize={`11px`}
                      color={`#666`}
                      letterSpacing={0}
                      textAlign={`center`}
                    >
                      ESPAÑOL
                    </Box>
                  </Button>
                </Box>
              </Flex>
            ) : null}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
