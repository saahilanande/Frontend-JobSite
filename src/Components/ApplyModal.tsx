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
  useColorModeValue,
} from "@chakra-ui/react";
import noImage from "../assets/no-image.png";
import { useState } from "react";
import Successful from "./Successful";
import ApiClient from "../Service/Api-Client";
import { JobDataSchema } from "../Hooks/useFetchJobs";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import { MdLocationOn, MdOutlineLocationCity } from "react-icons/md";
import { RiSuitcaseLine } from "react-icons/ri";

interface props {
  onClose: () => void;
  isOpen: boolean;
  jobData: JobDataSchema;
  appliedclick: (check: boolean) => void;
}

function ApplyModal({ onClose, isOpen, jobData, appliedclick }: props) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const bluemode = useColorModeValue("#3182ce", "#ED8936");
  const auth = useAuthUser();
  const apiKey = auth()?.apiKey;
  const userId = auth()?.userId;
  const authHeader = useAuthHeader();
  const applicationdate = new Date();
  const onApplyClick = () => {
    const apply = {
      job_id: jobData._id,
      user_id: userId,
      application_date: applicationdate,
      resume_file: "applicationDataresume_file",
    };

    ApiClient.post("/application/addapplication", apply, {
      params: {
        api_key: apiKey,
      },
      headers: { Authorization: authHeader() },
    })
      .then(() => {
        setisLoading(true);
        setIsSuccess(true);
      })
      .catch((err) => {
        console.log(err.message);
        setIsSuccess(false);
      });
  };

  return (
    <>
      <Modal size={"lg"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader fontFamily={"sans-serif"}>{jobData.title}</ModalHeader>
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
                <Image src={noImage} boxSize={"md"}></Image>
              </Center>
              <HStack spacing={2} padding={3}>
                <Text fontFamily={"sans-serif"}>Location:</Text>
                <Spacer />
                <MdLocationOn color={bluemode} />
                <Text as={"b"} fontFamily={"sans-serif"}>
                  {jobData.location}
                </Text>
              </HStack>

              <HStack spacing={2} padding={3}>
                <Text fontFamily={"sans-serif"}>Type:</Text>
                <Spacer />
                <MdOutlineLocationCity color={bluemode} />
                <Text as={"b"} fontFamily={"sans-serif"}>
                  {jobData.job_type}
                </Text>
              </HStack>
              <HStack spacing={2} padding={3}>
                <Text fontFamily={"sans-serif"}>Employment Type</Text>
                <Spacer />
                <RiSuitcaseLine color={bluemode} />
                <Text as={"b"} fontFamily={"sans-serif"}>
                  {jobData.employment_type}
                </Text>
              </HStack>

              <Text fontSize="md" fontFamily={"sans-serif"}>
                {jobData.job_description}
              </Text>
            </ModalBody>
          )}

          {isSuccess ? null : (
            <ModalFooter>
              <HStack spacing={1}>
                <Button onClick={onClose}>Close</Button>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    onApplyClick();
                    appliedclick(true);
                  }}
                >
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
