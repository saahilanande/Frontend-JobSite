import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  HStack,
  Spacer,
  ModalFooter,
  Button,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import noImage from "../assets/no-image.png";
import { useState } from "react";
import Successful from "./Successful";

interface props {
  onClose: () => void;
  isOpen: boolean;
  jobTitle: string;
  location: string;
  jobType: string;
  empType: string;
  jobDesc: string;
}

function ApplyModal({
  onClose,
  isOpen,
  jobTitle,
  location,
  jobType,
  empType,
  jobDesc,
}: props) {
  const [isSuccess, setIsSuccess] = useState(false);
  const onApplyClick = () => {
    setIsSuccess(true);
  };

  return (
    <>
      <Modal size={"xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader fontFamily={"sans-serif"}>{jobTitle}</ModalHeader>
          <ModalCloseButton />
          {isSuccess ? (
            <Successful
              success={isSuccess}
              successString="Applied Successfully"
              handleClick={onClose}
              buttonName="Close"
            />
          ) : (
            <ModalBody>
              <Center>
                <Image src={noImage} boxSize={"lg"}></Image>
              </Center>
              <HStack spacing={2} padding={3}>
                <Text fontFamily={"sans-serif"}>Location:</Text>
                <Spacer />
                <Text as={"b"} fontFamily={"sans-serif"}>
                  {location}
                </Text>
              </HStack>

              <HStack spacing={2} padding={3}>
                <Text fontFamily={"sans-serif"}>Type:</Text>
                <Spacer />
                <Text as={"b"} fontFamily={"sans-serif"}>
                  {jobType}
                </Text>
              </HStack>
              <HStack spacing={2} padding={3}>
                <Text fontFamily={"sans-serif"}>Employment Type</Text>
                <Spacer />
                <Text as={"b"} fontFamily={"sans-serif"}>
                  {empType}
                </Text>
              </HStack>

              <Text fontSize="md" fontFamily={"sans-serif"}>
                {jobDesc}
              </Text>
            </ModalBody>
          )}

          {isSuccess ? null : (
            <ModalFooter>
              <HStack spacing={1}>
                <Button onClick={onClose}>Close</Button>
                <Button colorScheme="blue" onClick={() => onApplyClick()}>
                  APPLY
                </Button>
              </HStack>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ApplyModal;
