import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import { useSignOut } from "react-auth-kit";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/register");
    signOut();
  };

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav" bg={"gold"}>
          <Navbar onbuttonclick={() => handleLogout()} buttonName="Logout" />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" bg={"black"}>
            SIDE NAVVV
          </GridItem>
        </Show>

        <GridItem area="main" padding={2} bg={"cyan"}>
          MAINN AREAAAAAAA
        </GridItem>
      </Grid>
    </>
  );
}

export default Home;
