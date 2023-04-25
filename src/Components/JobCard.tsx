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
} from "@chakra-ui/react";
import noImage from "../assets/no-image.png";
import { MdLocationOn } from "react-icons/md";
import { RiSuitcaseLine } from "react-icons/ri";
import { JobDataSchema } from "../Hooks/useFetchJobs";

interface props {
  jobData: JobDataSchema;
}

function JobCard({ jobData }: props) {
  return (
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
            <MdLocationOn />
            <Text>{jobData.location}</Text>
          </HStack>
          <HStack spacing={1}>
            <RiSuitcaseLine />
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
          <Divider
            height={"1px"}
            bgColor={"gray"}
            marginTop={1}
            marginBottom={1}
          ></Divider>
          <Text fontSize="sm" noOfLines={2}>
            {jobData.job_description}
          </Text>
        </CardBody>
        <Button marginTop={4} marginRight={2} colorScheme={"blue"}>
          Easy Apply
        </Button>
      </Flex>
    </Card>
  );
}

export default JobCard;
