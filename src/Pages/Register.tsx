import {
  Grid,
  GridItem,
  Container,
  Box,
  Divider,
  HStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  InputRightElement,
  Center,
  FormErrorMessage,
  Spinner,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import {
  AtSignIcon,
  ChevronRightIcon,
  PhoneIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ApiClient from "../Service/Api-Client";
import Successful from "../Components/Successful";

function Register() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        firstnametxt: "",
        lastnametxt: "",
        emailtxt: "",
        passwordtxt: "",
        phonetxt: "",
      },
      validationSchema: Yup.object({
        firstnametxt: Yup.string().required("Please Enter your firstname"),
        lastnametxt: Yup.string().required("Please Enter your Lastname"),
        emailtxt: Yup.string().required("Please Enter your Email"),
        passwordtxt: Yup.string()
          .required("Please Enter your password")
          .min(6, "Password should be longer than 6 characters"),
        phonetxt: Yup.number()
          .typeError("Phone Number must be a number")
          .required("Please Enter your Phone number")
          .min(10000, "Phone number should be 10 numbers"),
      }),
      onSubmit: ({
        firstnametxt,
        lastnametxt,
        emailtxt,
        passwordtxt,
        phonetxt,
      }) => {
        const userinfo = {
          first_name: firstnametxt,
          last_name: lastnametxt,
          email: emailtxt,
          password: passwordtxt,
          phone: phonetxt,
        };

        setIsLoading(true);
        ApiClient.post("/user/adduser", userinfo)
          .then((res) => {
            console.log(res);
            setIsLoading(false);
            setSuccess(true);
          })
          .catch((err) => {
            console.log(err.message);
            setIsLoading(false);
          });
      },
    });

  {
    if (success)
      return (
        <>
          <Successful success={success} path="/login" />
        </>
      );
  }

  return (
    <>
      <Grid templateAreas={{ base: `"nav" "main"` }}>
        <GridItem area="nav">
          <Navbar onbuttonclick={() => navigate("/login")} buttonName="Login" />
        </GridItem>

        <GridItem area="main" padding={2}>
          <Container>
            <Container
              padding={10}
              borderStyle={"solid"}
              borderWidth={"1px"}
              borderColor={"blackAlpha.500"}
            >
              <Container centerContent>
                <Text>Use google account</Text>
              </Container>
              <Box marginTop={2}>
                <HStack spacing={2}>
                  <Divider orientation="horizontal" />
                  <Text>or</Text>
                  <Divider orientation="horizontal" />
                </HStack>
                <form onSubmit={handleSubmit}>
                  <FormControl isInvalid={errors.firstnametxt ? true : false}>
                    <FormLabel marginTop={3}>First Name</FormLabel>
                    <InputGroup borderWidth={3} marginTop={3}>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<ChevronRightIcon color="gray.600" />}
                      />
                      <Input
                        id="firstnametxt"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstnametxt}
                        size="md"
                        type="text"
                        placeholder="First Name"
                        borderColor={"blackAlpha.500"}
                      />
                    </InputGroup>
                    {touched.firstnametxt && errors.firstnametxt ? (
                      <FormErrorMessage>{errors.firstnametxt}</FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <FormControl isInvalid={errors.lastnametxt ? true : false}>
                    <FormLabel marginTop={3}>Last Name</FormLabel>
                    <InputGroup borderWidth={3} marginTop={3}>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<ChevronRightIcon color="gray.600" />}
                      />
                      <Input
                        id="lastnametxt"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastnametxt}
                        size="md"
                        type="text"
                        placeholder="Last Name"
                        borderColor={"blackAlpha.500"}
                      />
                    </InputGroup>
                    {touched.lastnametxt && errors.lastnametxt ? (
                      <FormErrorMessage>{errors.lastnametxt}</FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <FormControl isInvalid={errors.emailtxt ? true : false}>
                    <FormLabel marginTop={3}>Email</FormLabel>
                    <InputGroup borderWidth={3} marginTop={3}>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<AtSignIcon color="gray.600" />}
                      />
                      <Input
                        id="emailtxt"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.emailtxt}
                        size="md"
                        type="email"
                        placeholder="example@.com"
                        borderColor={"blackAlpha.500"}
                      />
                    </InputGroup>
                    {touched.emailtxt && errors.emailtxt ? (
                      <FormErrorMessage>{errors.emailtxt}</FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <FormControl isInvalid={errors.passwordtxt ? true : false}>
                    <FormLabel marginTop={3}>Password</FormLabel>
                    <InputGroup borderWidth={3} marginTop={3}>
                      <Input
                        id="passwordtxt"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordtxt}
                        size="md"
                        type={show ? "text" : "password"}
                        placeholder="password"
                        borderColor={"blackAlpha.500"}
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
                    {touched.passwordtxt && errors.passwordtxt ? (
                      <FormErrorMessage>{errors.passwordtxt}</FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <FormControl isInvalid={errors.phonetxt ? true : false}>
                    <FormLabel marginTop={3}>Mobile Number</FormLabel>
                    <InputGroup borderWidth={3} marginTop={3}>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<PhoneIcon color="gray.600" />}
                      />
                      <Input
                        type="tel"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phonetxt}
                        placeholder="Phone number"
                        id="phonetxt"
                        size="md"
                        borderColor={"blackAlpha.500"}
                      />
                    </InputGroup>
                    {touched.phonetxt && errors.phonetxt ? (
                      <FormErrorMessage>{errors.phonetxt}</FormErrorMessage>
                    ) : null}
                  </FormControl>
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
                        Sign up
                      </Button>
                    )}
                  </Center>
                </form>
              </Box>
            </Container>
            <Container
              centerContent
              marginTop={3}
              padding={5}
              borderStyle={"solid"}
              borderWidth={"1px"}
              borderColor={"blackAlpha.500"}
            >
              <HStack>
                <Text>Already have a account? </Text>
                <Button
                  variant={"link"}
                  colorScheme="blue"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
              </HStack>
            </Container>
          </Container>
        </GridItem>
      </Grid>
    </>
  );
}

export default Register;
