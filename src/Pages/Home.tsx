import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import { useSignOut } from "react-auth-kit";
import Navbar from "../Components/Navbar";

function Home() {
  const signOut = useSignOut();

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav" bg={"gold"}>
          <Navbar />
          <Button onClick={() => handleLogout()}>Logout</Button>
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
