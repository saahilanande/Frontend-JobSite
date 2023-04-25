import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import EmploymentFilter from "./EmploymentFilter";
import { useState } from "react";
import { EmploymentFilters } from "../Hooks/useFetchJobs";

function SideBar() {
  const [employmentfilter, setEmploymentFilter] = useState<EmploymentFilters>(
    {} as EmploymentFilters
  );

  return (
    <>
      <Flex marginLeft={5} padding={10}>
        <VStack spacing={1}>
          <Box marginBottom={5}>
            <Heading size={"sm"}>Filters: </Heading>
            
          </Box>
          <EmploymentFilter
            onfilterClick={(filtername) => {
              if (filtername === "fullTime") {
                setEmploymentFilter({
                  ...employmentfilter,
                  fullTime: !employmentfilter.fullTime,
                });
              }
              if (filtername === "partTime") {
                setEmploymentFilter({
                  ...employmentfilter,
                  partTime: !employmentfilter.partTime,
                });
              }
              if (filtername === "contract") {
                setEmploymentFilter({
                  ...employmentfilter,
                  contract: !employmentfilter.contract,
                });
              }
            }}
          />
        </VStack>
      </Flex>
    </>
  );
}

export default SideBar;
