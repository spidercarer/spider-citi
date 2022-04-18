import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Group } from "./Group";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Box pos={`static`} bg={`#333`} zIndex={1}>
      <Box bg={`#333`} pb={`20px`}>
        <Flex
          w={`100%`}
          maxW={`1440px`}
          m={`0 auto`}
          p={[`7px 5% 0`, `40px 6.667% 0`]}
          justifyContent={`space-between`}
          flexDir={[`column`, `row`]}
        >
          <Group
            title={`Why Citi`}
            borderTop={`none`}
            navigations={[
              `Our Story`,
              `Careers`,
              `Benefits and Services`,
              `Rewards`,
              `Citi Easy Deals℠`,
              `Citi Entertainment®`,
              `Special Offers`,
            ]}
          />
          <Group
            title={`Wealth Management`}
            navigations={[
              `Citigold® Private Client`,
              `Citigold`,
              `Citi Priority`,
              `Citi Private Bank`,
            ]}
          />
          <Group
            title={`Business Banking`}
            navigations={[`Small Business Accounts`, `Commercial Accounts`]}
          />
          <Group
            title={`Rates`}
            navigations={[
              `Personal Banking`,
              `Credit Cards`,
              `Mortgage`,
              `Home Equity`,
              `Lending`,
            ]}
          />
          <Group
            title={`Help & Support`}
            navigations={[`Contact Us`, `Help & FAQs`, `Security Center`]}
          />
          <Group pr={0}>
            <Box pt={`7px`} float={[`none`, `right`]}>
              <Box float={`left`}>
                <Box
                  as={`span`}
                  mr={0}
                  bgPos={`0 100%`}
                  w={`31.5px`}
                  ml={`15px`}
                  bgSize={`70px`}
                  h={`30px`}
                  bgRepeat={`no-repeat`}
                  cursor={`pointer`}
                  display={`inline-block`}
                >
                  <Image
                    src={`/images/equalHousing.png`}
                    alt={`Equal Housing`}
                    verticalAlign={`middle`}
                    border={0}
                  />
                </Box>
              </Box>
            </Box>
          </Group>
        </Flex>
      </Box>
      <Box bg={`#333`} pb={`20px`}>
        <Flex
          w={`100%`}
          maxW={`1440px`}
          m={`0 auto`}
          p={[`20px 5% 12px 5%`, `20px 6.667%`]}
          justifyContent={`space-between`}
          display={[`block`, `flex`]}
        >
          <Flex pb={`10px`}>
            <Box pr={`24px`}>
              <Button
                bg={`transparent`}
                border={`none`}
                p={0}
                cursor={`pointer`}
                textTransform={`none`}
                overflow={`visible`}
                variant={`unstyled`}
              >
                <Image
                  src={`/images/googlePlay3x.png`}
                  alt={``}
                  w={`130px`}
                  h={`40.1px`}
                  bgPos={`0 -45px`}
                  bgRepeat={`no-repeat`}
                  bgSize={`cover`}
                  verticalAlign={`middle`}
                  border={0}
                />
              </Button>
            </Box>
            <Box pr={`24px`}>
              <Button
                bg={`transparent`}
                border={`none`}
                p={0}
                cursor={`pointer`}
                textTransform={`none`}
                overflow={`visible`}
                variant={`unstyled`}
              >
                <Image
                  src={`/images/appStore3x.png`}
                  alt={``}
                  w={`117px`}
                  h={`40.1px`}
                  bgPos={`0 0`}
                  bgRepeat={`no-repeat`}
                  bgSize={`cover`}
                  verticalAlign={`middle`}
                  border={0}
                />
              </Button>
            </Box>
          </Flex>
          <Flex pb={`10px`}>
            <Box pr={`24px`}>
              <Button
                bg={`transparent`}
                border={`none`}
                p={0}
                cursor={`pointer`}
                textTransform={`none`}
                overflow={`visible`}
                variant={`unstyled`}
                minW={`auto`}
              >
                <Image
                  src={`/images/social-media_facebook3x.png`}
                  alt={``}
                  w={`9px`}
                  h={`16px`}
                  bgRepeat={`no-repeat`}
                  bgSize={`cover`}
                  verticalAlign={`middle`}
                  border={0}
                />
              </Button>
            </Box>
            <Box pr={`24px`}>
              <Button
                bg={`transparent`}
                border={`none`}
                p={0}
                cursor={`pointer`}
                textTransform={`none`}
                overflow={`visible`}
                variant={`unstyled`}
                minW={`auto`}
              >
                <Image
                  src={`/images/social-media_twitter3x.png`}
                  alt={``}
                  w={`22px`}
                  h={`16px`}
                  bgRepeat={`no-repeat`}
                  bgSize={`cover`}
                  verticalAlign={`middle`}
                  border={0}
                />
              </Button>
            </Box>
            <Box>
              <Button
                bg={`transparent`}
                border={`none`}
                p={0}
                cursor={`pointer`}
                textTransform={`none`}
                overflow={`visible`}
                variant={`unstyled`}
                minW={`auto`}
              >
                <Image
                  src={`/images/social-media_youtube3x.png`}
                  alt={``}
                  w={`22px`}
                  h={`16px`}
                  bgRepeat={`no-repeat`}
                  bgSize={`cover`}
                  verticalAlign={`middle`}
                  border={0}
                />
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box
        bgColor={`#333`}
        fontSize={`12px`}
        p={`0 6.667%`}
        maxW={`1440px`}
        m={`0 auto 24px`}
      >
        <Box
          h={[`auto`, `68px`]}
          p={`20px 0`}
          border={`1px solid #666`}
          borderWidth={`1px 0`}
          m={0}
        >
          <Text
            display={`inline-block`}
            m={0}
            mr={`20px`}
            fontFamily={`Interstate_Bold,sans-serif`}
            fontSize={`12px`}
            color={`#fff`}
            lineHeight={`1.5rem`}
          >
            © 2022 Citigroup Inc
          </Text>
          <UnorderedList m={0} p={0} display={[`block`, `inline-block`]}>
            {[
              `Terms & Conditions`,
              `Privacy`,
              `Notice at Collection`,
              `CA Privacy Hub`,
              `Accessibility`,
              `Country & Jurisdictions:`,
            ].map((text, index) => {
              return (
                <ListItem
                  key={index}
                  display={[`block`, `inline-block`]}
                  m={0}
                  mr={`20px`}
                  fontFamily={`Interstate_Light,sans-serif,Arial`}
                  fontSize={`16px`}
                  color={`#333`}
                >
                  <Link
                    color={`#fff`}
                    fontSize={`12px`}
                    textDecor={`none`}
                    mr={0}
                  >
                    {text}
                  </Link>
                </ListItem>
              );
            })}
            <ListItem
              display={`inline-block`}
              m={0}
              fontFamily={`Interstate_Bold,sans-serif,Arial`}
              fontSize={`16px`}
              color={`#333`}
              ml={[0, `-14px`]}
            >
              <Button
                textAlign={`center`}
                color={`#fff`}
                fontSize={`12px`}
                textDecor={`none`}
                mr={0}
                variant={`unstyled`}
                _hover={{
                  textDecor: `underline`,
                }}
              >
                <b>United States</b>
              </Button>
              <Box
                as={`span`}
                fontWeight={`bold`}
                fontSize={`12px`}
                color={`#fff`}
                m={0}
              >{` > `}</Box>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
      <Box bg={`#333`} pb={`12px`}>
        <Box
          width={`100%`}
          maxW={`1440px`}
          m={`0 auto`}
          p={[`0 5%`, `0 6.667%`]}
        >
          <Box fontSize={`12px`} color={`#fff`}>
            <Text
              fontFamily={`Interstate_Light,sans-serif`}
              fontSize={`12px`}
              color={`#f4f4f4`}
              letterSpacing={0}
              lineHeight={`18px`}
              mt={0}
              m={`0 0 12px`}
            >
              <Text
                as={`strong`}
                fontFamily={`Interstate_Bold,sans-serif`}
                fontWeight={700}
                style={{
                  WebkitFontSmoothing: `antialiased`,
                }}
              >
                Important Legal Disclosures & Information
              </Text>
            </Text>
            <Text
              fontFamily={`Interstate_Light,sans-serif`}
              fontSize={`12px`}
              color={`#f4f4f4`}
              letterSpacing={0}
              lineHeight={`18px`}
              mt={0}
              m={`0 0 12px`}
            >
              Citibank.com provides information about and access to accounts and
              financial services provided by Citibank, N.A. and its affiliates
              in the United States and its territories. It does not, and should
              not be construed as, an offer, invitation or solicitation of
              services to individuals outside of the United States.
            </Text>
            <Text
              fontFamily={`Interstate_Light,sans-serif`}
              fontSize={`12px`}
              color={`#f4f4f4`}
              letterSpacing={0}
              lineHeight={`18px`}
              mt={0}
              m={`0 0 12px`}
            >
              Terms, conditions and fees for accounts, products, programs and
              services are subject to change. Not all accounts, products, and
              services as well as pricing described here are available in all
              jurisdictions or to all customers. Your eligibility for a
              particular product and service is subject to a final determination
              by Citibank. Your country of citizenship, domicile, or residence,
              if other than the United States, may have laws, rules, and
              regulations that govern or affect your application for and use of
              our accounts, products and services, including laws and
              regulations regarding taxes, exchange and/or capital controls that
              you are responsible for following.
            </Text>
            <Text
              fontFamily={`Interstate_Light,sans-serif`}
              fontSize={`12px`}
              color={`#f4f4f4`}
              letterSpacing={0}
              lineHeight={`18px`}
              mt={0}
              m={`0 0 12px`}
            >
              The products, account packages, promotional offers and services
              described in this website may not apply to customers of
            </Text>
          </Box>
        </Box>
      </Box>
      <Box bg={`#333`}>
        <Box
          color={`#fff`}
          fontSize={`12px`}
          w={`100%`}
          maxW={`1440px`}
          m={`0 auto`}
          p={`20px`}
        />
        <Box>
          <Image
            src={`/images/320_Citi-PLT3x.png`}
            alt={``}
            display={[`block`, `none`]}
          />
          <Image
            src={`/images/1440_Citi-PLT3x.png`}
            alt={``}
            display={[`none`, `block`]}
            w={`100%`}
            verticalAlign={`middle`}
            border={0}
          />
        </Box>
      </Box>
    </Box>
  );
};
