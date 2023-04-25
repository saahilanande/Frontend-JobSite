import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useSignOut } from "react-auth-kit";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import useFetchJobs from "../Hooks/useFetchJobs";
import JobGrid from "../Components/JobGrid";
import SideBar from "../Components/SideBar";
import { useState } from "react";

interface props {
  apikey: string;
}

function Home({ apikey }: props) {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const { jobData, isLoading, isError } = useFetchJobs(apikey);
  const [filter, setFilter] = useState<string[]>([]);

  const handleLogout = () => {
    navigate("/login");
    signOut();
  };

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav">
          <Navbar onbuttonclick={() => handleLogout()} buttonName="Logout" />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside">
            <SideBar
              filterlist={filter}
              handleFilter={(filtername) => {
                if (filter.includes(filtername)) {
                  setFilter((oldarray) =>
                    oldarray.filter((word) => word != filtername)
                  );
                } else {
                  setFilter((oldarray) => [...oldarray, filtername]);
                }
              }}
            />
          </GridItem>
        </Show>

        <GridItem area="main" padding={2}>
          <JobGrid jobData={jobData} />
        </GridItem>
      </Grid>
    </>
  );
}

export default Home;
