import React from "react";
import useFetchUser from "../Hooks/useFetchUser";
import { useAuthUser, useSignOut } from "react-auth-kit";
import {
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { EditIcon, EmailIcon, LockIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaLocationArrow } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import ProfileEdit from "../Components/ProfileEdit";
import SkeletonDetails from "../Components/SkeletonDetails";

function Profile() {
  const auth = useAuthUser();
  const userId = auth()?.userId;
  const signOut = useSignOut();
  const navigate = useNavigate();
  const { userData, isLoading, isError } = useFetchUser(userId);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = () => {
    navigate("/login");
    signOut();
  };

  return (
    <>
      <Grid templateAreas={{ base: `"nav" "main"` }}>
        <GridItem area="nav">
          <Navbar
            onMyJobClicked={false}
            onMyJobClick={() => {}}
            onbuttonclick={() => handleLogout()}
            buttonName="Logout"
          />
        </GridItem>

        <GridItem area="main" padding={2}>
          <Center>
            <Heading size={"2xl"} fontFamily={"cursive"} color={"gray"}>
              About You
            </Heading>
            <EditIcon
              boxSize={10}
              color={"gray"}
              marginLeft={5}
              _hover={{ cursor: "pointer", color: "black" }}
              onClick={onOpen}
            />
          </Center>
          {isLoading && <SkeletonDetails />}
          <Container padding={5}>
            <VStack spacing={2}>
              <Container margin={2}>
                <Heading size={"lg"}>Name</Heading>
                <HStack>
                  <BsPersonFill />
                  <Text fontSize="2xl">
                    {userData?.first_name} {userData?.last_name}
                  </Text>
                </HStack>
              </Container>
              <Container margin={2}>
                <Heading size={"lg"}>Email</Heading>
                <HStack>
                  <EmailIcon />
                  <Text fontSize="2xl">{userData?.email}</Text>
                </HStack>
              </Container>
              <Container margin={2}>
                <Heading size={"lg"}>Phone</Heading>
                <HStack>
                  <PhoneIcon />
                  <Text fontSize="2xl">{userData?.phone}</Text>
                </HStack>
              </Container>
              {userData?.location && (
                <Container margin={2}>
                  <Heading size={"lg"}>Location</Heading>
                  <HStack>
                    <FaLocationArrow />.
                    <Text fontSize="2xl">{userData?.location}</Text>
                  </HStack>
                </Container>
              )}

              <Container margin={2}>
                <Heading size={"lg"}>Password</Heading>
                <HStack>
                  <LockIcon />
                  <Text fontSize="2xl">{userData?.password}</Text>
                </HStack>
              </Container>
              {userData?.skills.length && (
                <Container margin={2} padding={5}>
                  <Heading size={"lg"}>Skills</Heading>
                  <Stack spacing={4} direction="row">
                    {userData?.skills.map((data) => (
                      <>
                        <Text fontSize="2xl">
                          {data.skill_name} {data.skill_level}
                        </Text>
                      </>
                    ))}
                  </Stack>
                </Container>
              )}
            </VStack>
          </Container>
          <ProfileEdit userData={userData} onClose={onClose} isOpen={isOpen} />
        </GridItem>
      </Grid>
    </>
  );
}

export default Profile;
