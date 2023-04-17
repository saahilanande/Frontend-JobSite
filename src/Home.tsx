import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";

function Home() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav" bg={"gold"}>
          NAVVV BARR
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
