import {
  Box,
  Flex,
  Input as CUInput,
  Button as CUButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import {
  FieldValues,
  useForm,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import * as yup from "yup";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Input } from "../../../components/Input";
import { InputWrapper } from "../../../components/InputWrapper";
import { IntroText } from "../../../components/IntroText";
import { ProgressBar } from "../../../components/ProgressBar";
import { Section } from "../../../components/Section";
import { Wrapper } from "../../../components/Wrapper";
import { SelfieModal } from "../../../components/SelfieModal";
import { Loading } from "../../../components/Loading";
import { DataContext } from "../../_app";
import { getProgress } from "../../../utils/getProgress";
import { getNextUrl } from "../../../utils/getNextUrl";

interface SupportingDocumentsProps {}

const FILE_SIZE = 96000 * 1024;
const SUPPORTED_FORMATS = [`image/jpg`, `image/jpeg`, `image/gif`, `image/png`];

const schema = yup.object().shape({
  front: yup
    .mixed()
    .required(`Please upload the front image of your ID.`)
    .test(
      `fileExist`,
      `Please upload the front image of your ID.`,
      (value) => !!value[0]
    )
    .test(
      `fileSize`,
      `The image you selected is too large.`,
      (value) => value[0] && value[0].size <= FILE_SIZE
    )
    .test(
      `fileFormat`,
      `The image you are trying to upload is not supported`,
      (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    ),
  back: yup
    .mixed()
    .required(`Please upload the back image of your ID.`)
    .test(
      `fileExist`,
      `Please upload the front image of your ID.`,
      (value) => !!value[0]
    )
    .test(
      `fileSize`,
      `The image you selected is too large.`,
      (value) => value[0] && value[0].size <= FILE_SIZE
    )
    .test(
      `fileFormat`,
      `The image you are trying to upload is not supported`,
      (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    ),
});

const SupportingDocuments: React.FC<SupportingDocumentsProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `all`,
  });

  const { push } = useRouter();

  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data: datas, setData } = useContext(DataContext);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    const formData = new FormData();

    formData.append(`front`, data.front[0]);
    formData.append(`back`, data.back[0]);
    formData.append(`form`, `SUPPORTING DOCUMENTS`);

    await axios.post(`/api/send-id`, formData, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
    setLoading(false);
    setData({
      ...datas,
      docs: {
        front: data.front[0],
        back: data.back[0],
      },
    });

    if (process.env.NEXT_PUBLIC_TAKE_SELFIE === `ON`) {
      onOpen();
      return;
    }

    const url =
      getProgress()[getProgress().indexOf(`Supporting Documents`) + 1];

    push(getNextUrl(url));
  });

  return (
    <>
      {loading ? <Loading /> : null}
      <SelfieModal isOpen={isOpen} onClose={onClose} />
      <Wrapper>
        <Container>
          <ProgressBar
            indicators={getProgress()}
            highlight={getProgress().indexOf(`Supporting Documents`)}
          />
          <Section>
            <IntroText
              title={`Upload a copy of your ID`}
              paragraph={`We need you to verify that this account belongs to you, upload a government issued identity documents.`}
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
                    <FileInput
                      register={register}
                      watch={watch}
                      errors={errors}
                      name={`front`}
                      label={`Front of ID`}
                      placeholder={`Front of ID`}
                    />
                    <FileInput
                      register={register}
                      watch={watch}
                      errors={errors}
                      name={`back`}
                      label={`Back of ID`}
                      placeholder={`Back of ID`}
                    />
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

interface FileInputType {
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: {
    [x: string]: any;
  };
  name: string;
  label: string;
  placeholder?: string;
}

const FileInput: React.FC<FileInputType> = ({
  register,
  watch,
  errors,
  name,
  label,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register(name);
  return (
    <Box>
      {watch(name) && watch(name).length ? (
        <Image
          alt={name}
          src={URL.createObjectURL(watch(name)[0])}
          h={`100px`}
          w={`100px`}
          objectFit={`contain`}
        />
      ) : null}
      <InputWrapper pos={`relative`}>
        <CUInput
          type={`file`}
          accept={`image/*`}
          pos={`absolute`}
          w={`full`}
          h={`full`}
          zIndex={1}
          opacity={0}
          cursor={`pointer`}
          onFocus={() => console.log(`Focused: ${name}`)}
          {...rest}
          ref={(e) => {
            ref(e);
            inputRef.current = e;
          }}
        />
        {watch(name) && watch(name).length ? (
          <CUButton
            variant={`unstyled`}
            as={`span`}
            pos={`absolute`}
            zIndex={2}
            right={`25px`}
            bottom={`17px`}
            fontFamily={`Interstate_Bold,sans-serif`}
            fontWeight={`bold`}
            color={`#056dae`}
            cursor={`pointer`}
            w={`auto`}
            h={`auto`}
            _hover={{
              color: `#002a54`,
            }}
            _focus={{
              color: `#002a54`,
            }}
            onClick={() => {
              inputRef.current?.click();
            }}
          >
            CHANGE
          </CUButton>
        ) : null}

        <Input
          label={label}
          placeholder={placeholder}
          boxStyle={{
            w: `100%`,
          }}
          textOverflow={`ellipsis`}
          pr={`50px`}
          error={errors[name] && errors[name].message}
          name={name}
          curValue={
            watch(name) && watch(name).length ? watch(name)[0].name : ``
          }
          defaultValue={
            watch(name) && watch(name).length ? watch(name)[0].name : ``
          }
        />
      </InputWrapper>
    </Box>
  );
};

export default SupportingDocuments;
