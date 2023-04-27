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
  const [jobTypefilter, setJobTypeFilter] = useState<string[]>([]);
  const [empTypefilter, setEmpTypeFilter] = useState<string[]>([]);
  const { jobData, isLoading, isError } = useFetchJobs(
    apikey,
    jobTypefilter,
    empTypefilter
  );

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
              filterlist={jobTypefilter.concat(empTypefilter)}
              handleJobFilter={(filtername) => {
                if (jobTypefilter.includes(filtername)) {
                  setJobTypeFilter((oldarray) =>
                    oldarray.filter((word) => word != filtername)
                  );
                } else {
                  setJobTypeFilter((oldarray) => [...oldarray, filtername]);
                }
              }}
              handleEmpFilter={(filtername) => {
                if (empTypefilter.includes(filtername)) {
                  setEmpTypeFilter((oldarray) =>
                    oldarray.filter((word) => word != filtername)
                  );
                } else {
                  setEmpTypeFilter((oldarray) => [...oldarray, filtername]);
                }
              }}
            />
          </GridItem>
        </Show>

        <GridItem area="main" padding={2}>
          <JobGrid jobData={jobData} jobloading={isLoading} />
        </GridItem>
      </Grid>
    </>
  );
}

export default Home;
