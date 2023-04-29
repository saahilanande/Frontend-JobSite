import {
  Center,
  Container,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
interface props {
  heading: string;
}

function NojobFound({ heading }: props) {
  const bluemode = useColorModeValue("#90cdf4", "#F6AD55");
  return (
    <Container padding={10} maxWidth={"100%"} marginTop={100} color={bluemode}>
      <Heading as="h1" size="4xl" noOfLines={1}>
        {heading}
      </Heading>
    </Container>
  );
}

export default NojobFound;
