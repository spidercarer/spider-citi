import {
  Box,
  Input as CUInput,
  InputProps as CUIInputProps,
  BoxProps,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends CUIInputProps {
  boxStyle?: BoxProps;
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
  register?: UseFormRegister<FieldValues>;
  registerOptions?: any;
  mask?: string;
  curValue?: string;
}

export const Input: React.FC<InputProps> = ({
  boxStyle,
  label,
  name,
  placeholder,
  error,
  register = () => ({}),
  registerOptions,
  curValue,
  ...props
}) => {
  const [isInputFocus, setIsInputFocus] = useState(false);

  return (
    <Box
      w={[`100%`, `50%`]}
      float={`left`}
      pos={`relative`}
      minH={`1px`}
      px={[0, `10px`]}
      {...boxStyle}
    >
      <Box mx={`-10px`} display={`block`}>
        <Box
          px={`10px`}
          w={`100%`}
          float={`left`}
          pos={`relative`}
          minH={`1px`}
        >
          <Text
            as={`label`}
            opacity={isInputFocus || curValue ? 1 : 0}
            fontSize={`.75em`}
            color={`#666`}
            w={`100%`}
            pointerEvents={`none`}
            transition={`opacity 225ms ease-in-out`}
            fontWeight={400}
            mb={0}
            display={`inline-block`}
            maxW={`100%`}
          >
            {label}
          </Text>
          <Box
            w={`100%`}
            m={`3px 0 5px`}
            boxSizing={`border-box`}
            float={`left`}
            display={`inline-flex`}
            flexDir={`row`}
            flexWrap={`nowrap`}
            justifyContent={`flex-start`}
            alignContent={`stretch`}
            alignItems={`flex-start`}
            borderRadius={`8px`}
            bg={`#eee`}
            border={`.9px solid ${
              error ? `#d60000` : isInputFocus ? "#056dae" : "transparent"
            }`}
            _focus={{
              borderColor: `#056dae`,
            }}
          >
            <Box
              order={0}
              flex={`0 1 auto`}
              alignSelf={`auto`}
              boxSizing={`border-box`}
            />
            <Box
              flex={`1 1 0%`}
              boxSizing={`border-box`}
              margin={`0 2px`}
              borderRadius={`8px`}
            >
              <CUInput
                w={`100%`}
                boxSizing={`border-box`}
                letterSpacing={`.5px`}
                h={`48px`}
                p={`10px 20px`}
                bg={`#eee`}
                border={`none`}
                boxShadow={`none`}
                borderRadius={`8px`}
                fontSize={`1rem`}
                font={`inherit`}
                color={`inherit`}
                m={0}
                fontFamily={`inherit`}
                lineHeight={`inherit`}
                placeholder={isInputFocus ? `` : placeholder}
                _placeholder={{
                  WebkitAppearance: `none`,
                  color: `#666`,
                }}
                onFocus={() => setIsInputFocus(true)}
                _hover={{}}
                _focus={{}}
                {...props}
                {...register(name, {
                  onBlur: () => setIsInputFocus(false),
                  ...registerOptions,
                })}
                // onBlur={(e) => {
                //   console.log(e);

                //   return e;
                // }}
              />
            </Box>
            <Box flex={`0 1 auto`} boxSizing={`border-box`} />
          </Box>
          {error ? (
            <Box h={`auto`} w={`100%`} float={`left`}>
              <Text
                as={`span`}
                color={`#d60000`}
                pos={`relative`}
                display={`block`}
                fontFamily={`interstate_Bold,sans-serif`}
                lineHeight={`1rem`}
                fontWeight={700}
                fontSize={`.75rem`}
              >
                {error}
              </Text>
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};
