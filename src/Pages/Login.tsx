import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Show,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import Navbar from "../Components/Navbar";
import ApiClient from "../Service/Api-Client";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

function Login() {
  const [emailTxt, setEmailTxt] = useState("");
  const [passwordTxt, setPasswordTxt] = useState("");
  const [show, setShow] = useState(false);
  const [isErroremail, setisErroremail] = useState(false);
  const [isErrorPassword, setisErrorPassword] = useState(false);
  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleOnsubmit = (e: FormEvent) => {
    emailTxt === "" ? setisErroremail(true) : setisErroremail(false);
    passwordTxt === "" ? setisErrorPassword(true) : setisErrorPassword(false);
    e.preventDefault();

    if (emailTxt != "" && passwordTxt != "") {
      const userInfo = {
        email: emailTxt,
        password: passwordTxt,
      };

      ApiClient.post("/user/validateuser", userInfo)
        .then((res) => {
          if (res.data.accessToken) {
            signIn({
              token: res.data.accessToken,
              expiresIn: 3600,
              tokenType: "Bearer",
              authState: { email: emailTxt },
            });
            navigate("/home");
          } else {
            console.log("WRONG USER NAME OR PASSWORD");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "bside"`, lg: `"nav nav" "aside bside"` }}
      >
        <GridItem area="nav" bg={"gold"}>
          <Navbar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" bg={"black"}>
            WELCOOMEEE
          </GridItem>
        </Show>

        <GridItem area="bside">
          <Container>
            <form onSubmit={(e) => handleOnsubmit(e)}>
              <FormControl isInvalid={isErroremail}>
                <FormLabel marginTop={3}>Email</FormLabel>
                <Input
                  marginTop={3}
                  size="lg"
                  type="email"
                  value={emailTxt}
                  onChange={(e) => {
                    setEmailTxt(e.target.value);
                    setisErroremail(false);
                  }}
                />
                {isErroremail && (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={isErrorPassword}>
                <FormLabel marginTop={3}>Password</FormLabel>
                <InputGroup size="lg" marginTop={3}>
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    value={passwordTxt}
                    onChange={(e) => {
                      setPasswordTxt(e.target.value);
                      setisErrorPassword(false);
                    }}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="md"
                      onClick={() => setShow(!show)}
                      marginRight={1}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {isErrorPassword && (
                  <FormErrorMessage>Password is required.</FormErrorMessage>
                )}
              </FormControl>
              <Center marginTop={3}>
                <Button
                  marginTop={3}
                  width={"100%"}
                  colorScheme="teal"
                  variant="solid"
                  type="submit"
                  size={"lg"}
                  borderLeftRadius={25}
                  borderRightRadius={25}
                >
                  Login
                </Button>
              </Center>
            </form>
          </Container>
        </GridItem>
      </Grid>
    </>
  );
}

export default Login;
