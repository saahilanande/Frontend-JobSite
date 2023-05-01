import React from "react";
import useFetchUser from "../Hooks/useFetchUser";
import { useAuthUser } from "react-auth-kit";
import { Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { Form, useNavigate } from "react-router-dom";

function Profile() {
  const auth = useAuthUser();
  const apiKey = auth()?.apiKey;
  const userId = auth()?.userId;
  const navigate = useNavigate();
  const { userData, isLoading, isError } = useFetchUser(userId);

  return (
    <>
      <Grid templateAreas={{ base: `"nav" "main"` }}>
        <GridItem area="nav">
          <Navbar
            onMyJobClicked={false}
            onMyJobClick={() => {}}
            onbuttonclick={() => navigate("/login")}
            buttonName="Login"
          />
        </GridItem>

        <GridItem area="main" padding={2}>
          <Center>
            <Heading size={"2xl"} fontFamily={"cursive"} color={"gray"}>
              About You
            </Heading>
          </Center>
          <form></form>
        </GridItem>
      </Grid>
    </>
  );
}

export default Profile;
