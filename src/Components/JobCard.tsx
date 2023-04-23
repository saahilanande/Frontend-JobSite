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
  VStack,
} from "@chakra-ui/react";
import noImage from "../assets/no-image.png";

function JobCard() {
  return (
    <Card
      onClick={() => console.log("Clicked")}
      maxH={"sm"}
      margin={3}
      borderRadius={"xl"}
      _hover={{ bg: "blue", cursor: "pointer" }}
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
            JOB TITLE
          </Heading>
          <HStack spacing={2}>
            <Text>Location</Text>
            <Text>Company NAME</Text>
          </HStack>
          <HStack spacing={2}>
            <Text> Job Type</Text>
            <Text> -Upload Time</Text>
          </HStack>
          <Divider
            height={"1px"}
            bgColor={"gray"}
            marginTop={1}
            marginBottom={1}
          ></Divider>
          <Text fontSize="sm" noOfLines={3}>
            JOB DESCRIPTIOn : Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ip
          </Text>
        </CardBody>
        <Button marginTop={4} marginRight={2}>
          Easy Apply
        </Button>
      </Flex>
    </Card>
  );
}

export default JobCard;
