import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Show,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import ApiClient from "../Service/Api-Client";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import loginBackground from "../assets/loginbackground2.png";

interface props {
  setApi: (key: string) => void;
}

function Login({ setApi }: props) {
  const [show, setShow] = useState(false);
  const [invalidCred, setInvalidCred] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const signIn = useSignIn();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        emailTxt: "",
        passwordTxt: "",
      },
      validationSchema: Yup.object({
        emailTxt: Yup.string().required("Please Enter Email"),
        passwordTxt: Yup.string()
          .required("Please Enter Password")
          .min(6, "Password should be longer than 6 characters"),
      }),
      onSubmit: ({ emailTxt, passwordTxt }) => {
        const userInfo = {
          email: emailTxt,
          password: passwordTxt,
        };

        setIsLoading(true);
        ApiClient.post("/user/validateuser", userInfo)
          .then((res) => {
            if (res.status == 200) {
              signIn({
                token: res.data.accessToken,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: { email: emailTxt },
              });
              setApi(res.data.api_key);
              navigate("/home");
            } else {
              console.log("Wrong email addess or password");
              setInvalidCred(true);
              values.emailTxt = "";
              values.passwordTxt = "";
            }
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err.message);
            setIsLoading(false);
          });
      },
    });

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "aside"`, lg: `"nav nav" "aside bside"` }}
      >
        <GridItem area="nav">
          <Navbar
            onbuttonclick={() => navigate("/register")}
            buttonName="Sign up"
          />
        </GridItem>

        <Show above="lg">
          <GridItem area="bside">
            <Image src={loginBackground} margin={5} marginLeft={"10%"}></Image>
          </GridItem>
        </Show>

        <GridItem area="aside">
          <Container marginTop={"10%"}>
            <Container
              padding={10}
              borderWidth={"1px"}
              borderColor={"blackAlpha.300"}
              boxShadow={"lg"}
            >
              <form onSubmit={handleSubmit}>
                <FormControl isInvalid={errors.emailTxt ? true : false}>
                  <FormLabel marginTop={3}>Email</FormLabel>
                  <Input
                    borderWidth={3}
                    marginTop={3}
                    id="emailTxt"
                    size="lg"
                    type="email"
                    onChange={handleChange}
                    value={values.emailTxt}
                    onBlur={handleBlur}
                    placeholder="example@.com"
                    borderColor={"blackAlpha.300"}
                  />
                  {touched.emailTxt && errors.emailTxt ? (
                    <FormErrorMessage>{errors.emailTxt}</FormErrorMessage>
                  ) : null}
                </FormControl>

                <FormControl isInvalid={errors.passwordTxt ? true : false}>
                  <FormLabel marginTop={3}>Password</FormLabel>
                  <InputGroup size="lg" marginTop={3}>
                    <Input
                      borderWidth={3}
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      id="passwordTxt"
                      onChange={handleChange}
                      value={values.passwordTxt}
                      onBlur={handleBlur}
                      borderColor={"blackAlpha.300"}
                    />
                    <InputRightElement>
                      <Button
                        leftIcon={show ? <ViewOffIcon /> : <ViewIcon />}
                        h="1.75rem"
                        size="md"
                        onClick={() => setShow(!show)}
                        marginRight={3}
                        variant={"ghost"}
                      ></Button>
                    </InputRightElement>
                  </InputGroup>
                  {touched.emailTxt && errors.emailTxt ? (
                    <FormErrorMessage>{errors.passwordTxt}</FormErrorMessage>
                  ) : null}
                </FormControl>
                {values.emailTxt == "" && invalidCred ? (
                  <Alert status="error" marginTop={2}>
                    <AlertIcon />
                    Wrong email Id or Password
                  </Alert>
                ) : null}
                <Center marginTop={3}>
                  {isLoading ? (
                    <Spinner size={"lg"} />
                  ) : (
                    <Button
                      marginTop={3}
                      width={"100%"}
                      colorScheme="blue"
                      variant="solid"
                      type="submit"
                      size={"lg"}
                      borderLeftRadius={25}
                      borderRightRadius={25}
                    >
                      Login
                    </Button>
                  )}
                </Center>
              </form>
              <Box marginTop={2}>
                <HStack spacing={2}>
                  <Divider
                    orientation="horizontal"
                    height={"1px"}
                    bgColor={"gray"}
                  />
                  <Text>or</Text>
                  <Divider
                    orientation="horizontal"
                    height={"1px"}
                    bgColor={"gray"}
                  />
                </HStack>
              </Box>
              <Container centerContent>
                <Text>Use google account</Text>
              </Container>
            </Container>

            <Container
              centerContent
              marginTop={3}
              padding={5}
              borderWidth={"1px"}
              borderColor={"blackAlpha.300"}
              boxShadow={"lg"}
            >
              <HStack>
                <Text>Don't have an account? </Text>
                <Button
                  variant={"link"}
                  colorScheme="blue"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Sign up
                </Button>
              </HStack>
            </Container>
          </Container>
        </GridItem>
      </Grid>
    </>
  );
}

export default Login;
