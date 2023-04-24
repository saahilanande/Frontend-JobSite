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
import { GiSandsOfTime } from "react-icons/gi";

interface props {
  companyImg: string;
  jobTitle: string;
  joblocation: string;
  companyName: string;
  jobDescription: string;
  jobType: string;
  employment_type: string;
  applicationTime: Date;
}

function JobCard({
  companyImg,
  jobTitle,
  joblocation,
  companyName,
  applicationTime,
  jobDescription,
  jobType,
}: props) {
  return (
    <Card
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
            {jobTitle}
          </Heading>
          <HStack spacing={1}>
            <Text>{companyName}</Text>
            <Divider
              orientation="vertical"
              height={3}
              borderWidth={"1px"}
              bgColor={"black"}
            />
            <MdLocationOn />
            <Text>{joblocation}</Text>
          </HStack>
          <HStack spacing={1}>
            <RiSuitcaseLine />
            <Text> {jobType}</Text>
            <Divider
              orientation="vertical"
              height={3}
              borderWidth={"1px"}
              bgColor={"gray"}
            />
            <Text fontSize={"xs"} color={"gray.600"}>
              - {applicationTime.toString()}
            </Text>
          </HStack>
          <Divider
            height={"1px"}
            bgColor={"gray"}
            marginTop={1}
            marginBottom={1}
          ></Divider>
          <Text fontSize="sm" noOfLines={2}>
            {jobDescription}
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
