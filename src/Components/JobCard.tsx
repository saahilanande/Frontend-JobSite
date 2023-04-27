import {
  Button,
  Card,
  CardBody,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import noImage from "../assets/no-image.png";
import { MdLocationOn } from "react-icons/md";
import { RiSuitcaseLine } from "react-icons/ri";
import { JobDataSchema } from "../Hooks/useFetchJobs";
import ApplyModal from "./ApplyModal";

interface props {
  jobData: JobDataSchema;
}

function JobCard({ jobData }: props) {
  const bluemode = useColorModeValue("#3182ce", "#90cdf4");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Card
        boxShadow={"xl"}
        onClick={() => console.log("Clicked")}
        maxH={"sm"}
        margin={3}
        borderRadius={"xl"}
        _hover={{ cursor: "pointer" }}
      >
        <Flex padding={2}>
          <Center>
            <Image boxSize={20} src={noImage} alt="No image"></Image>
          </Center>
          <CardBody>
            <Heading
              size="sm"
              textTransform="uppercase"
              marginBottom={1}
              fontFamily={"sans-serif"}
            >
              {jobData.title}
            </Heading>
            <HStack spacing={1}>
              <Text>{"Company name"}</Text>
              <Divider
                orientation="vertical"
                height={3}
                borderWidth={"1px"}
                bgColor={"black"}
              />
              <MdLocationOn color={bluemode} />
              <Text>{jobData.location}</Text>
            </HStack>
            <Divider
              height={"1px"}
              bgColor={"gray"}
              marginTop={2}
              marginBottom={1}
            ></Divider>
            <HStack spacing={1}>
              <RiSuitcaseLine color={bluemode} />
              <Text fontSize={"xs"}> {jobData.job_type}</Text>
              <Divider
                orientation="vertical"
                height={3}
                borderWidth={"1px"}
                bgColor={"gray"}
              />
              <Text fontSize={"xs"} color={"gray.600"}>
                - {jobData.updatedAt.toString()}
              </Text>
            </HStack>
            <Text fontSize="sm" noOfLines={2}>
              {jobData.job_description}
            </Text>
          </CardBody>
          <Button
            marginTop={4}
            marginRight={2}
            colorScheme={"blue"}
            onClick={onOpen}
          >
            Easy Apply
          </Button>
        </Flex>
      </Card>
      <ApplyModal
        onClose={onClose}
        isOpen={isOpen}
        jobTitle={jobData.title}
        jobType={jobData.job_type}
        empType={jobData.employment_type}
        location={jobData.location}
        jobDesc={jobData.job_description}
      />
    </>
  );
}

export default JobCard;
