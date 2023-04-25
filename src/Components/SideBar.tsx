import { Alert, AlertIcon, Box, Flex, Heading, VStack } from "@chakra-ui/react";
import EmploymentFilter from "./EmploymentFilter";
interface props {
  handleFilter: (filtertype: string) => void;
  filterlist: string[];
}

function SideBar({ handleFilter, filterlist }: props) {
  return (
    <>
      <Flex marginLeft={10} marginTop={10}>
        <VStack spacing={1}>
          <Box marginBottom={5}>
            <Heading size={"sm"}>Filters: </Heading>
            {filterlist.map((data) => (
              <Alert status="info" margin={1} key={data}>
                <AlertIcon />
                {data}
              </Alert>
            ))}
          </Box>
          <EmploymentFilter
            onfilterClick={(filtername) => handleFilter(filtername)}
          />
        </VStack>
      </Flex>
    </>
  );
}

export default SideBar;
