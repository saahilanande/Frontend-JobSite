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
import { useState } from "react";
import Navbar from "../Components/Navbar";
import ApiClient from "../Service/Api-Client";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Login() {
  const [show, setShow] = useState(false);
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
      },
    });

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
