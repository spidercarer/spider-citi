import { Box, Link, Flex } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface WrapperProps {
  hideNav?: boolean;
}

export const Wrapper: React.FC<WrapperProps> = ({
  hideNav = true,
  children,
}) => {
  return (
    <Box>
      <Head>
        <title>Citibank Online</title>
      </Head>
      <Header hideNav={hideNav} />
      {hideNav ? (
        <Box
          bgColor={`rgb(0, 45, 114)`}
          h={`50px`}
          p={0}
          w={`100%`}
          m={`0 auto`}
          pos={`relative`}
        >
          <Flex
            justifyContent={`space-between`}
            h={`50%`}
            p={`16px 0`}
            display={[`flex`, `none`]}
          >
            <Link
              borderBottom={`none`}
              display={`inline-block`}
              cursor={`pointer`}
              p={`0 0 0 10px`}
              w={`58px`}
              h={`100%`}
              m={0}
              pos={`absolute`}
              top={0}
              color={`#056dae`}
              textDecor={`none`}
              bgColor={`transparent`}
            >
              <Box
                as={`span`}
                w={`26px`}
                h={`26px`}
                pos={`absolute`}
                bgRepeat={`no-repeat`}
                left={`16px`}
                top={`10px`}
                bgImage={`/images/menu-open.svg`}
              />
            </Link>
          </Flex>
        </Box>
      ) : null}
      {children}
      <Footer />
    </Box>
  );
};
