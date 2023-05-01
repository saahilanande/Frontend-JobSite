import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useAuthUser, useSignOut } from "react-auth-kit";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import useFetchJobs from "../Hooks/useFetchJobs";
import JobGrid from "../Components/JobGrid";
import SideBar from "../Components/SideBar";
import { useState } from "react";
import SearchBox from "../Components/SearchBox";

function Home() {
  const auth = useAuthUser();
  const apiKey = auth()?.apiKey;
  const userId = auth()?.userId;
  const signOut = useSignOut();
  const [myJob, setmyJob] = useState(false);
  const navigate = useNavigate();
  const [jobTypefilter, setJobTypeFilter] = useState<string[]>([]);
  const [empTypefilter, setEmpTypeFilter] = useState<string[]>([]);
  const [dateFilter, setDateFilter] = useState("anytime");
  const [titleString, setTitleString] = useState("");
  const [locationString, setLocationString] = useState("");
  const { jobData, isLoading, isError } = useFetchJobs(
    apiKey,
    jobTypefilter,
    empTypefilter,
    dateFilter,
    titleString,
    locationString
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
          <Navbar
            onbuttonclick={() => handleLogout()}
            buttonName="Logout"
            onMyJobClick={() => setmyJob(!myJob)}
          />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside">
            <SideBar
              filterlist={jobTypefilter.concat(empTypefilter, dateFilter)}
              handleDatefilter={(filtername) => setDateFilter(filtername)}
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
          <SearchBox
            onTitleSearchClick={(titleString) => setTitleString(titleString)}
            onLocationSearchClick={(location) => setLocationString(location)}
          />
          <JobGrid
            jobData={jobData}
            jobloading={isLoading}
            userId={userId}
            onMyJobClicked={myJob}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default Home;
