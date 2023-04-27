import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Container,
  ScaleFade,
  Icon,
  Button,
  Text,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface props {
  success: boolean;
  handleClick: () => void;
  successString: string;
}

function Successful({ success, handleClick, successString }: props) {
  const navigate = useNavigate();

  return (
    <>
      <Container centerContent padding={10}>
        <Container marginTop={10}>
          <ScaleFade initialScale={0.6} in={success}>
            <Center>
              <Icon as={CheckCircleIcon} boxSize={250} color={"green.600"} />
            </Center>
            <Container centerContent marginTop={10}>
              <Text size={"lg"}>{successString}</Text>
            </Container>
          </ScaleFade>
        </Container>

        <Button
          marginTop={5}
          size={"lg"}
          colorScheme="blue"
          variant={"outline"}
          borderRadius={25}
          onClick={() => handleClick()}
        >
          {" "}
          Login{" "}
        </Button>
      </Container>
    </>
  );
}

export default Successful;
