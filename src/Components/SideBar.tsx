import {
  Alert,
  AlertIcon,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import EmploymentFilter from "./EmploymentFilter";
interface props {
  handleJobFilter: (filtertype: string) => void;
  handleEmpFilter: (filtertype: string) => void;
  handleDatefilter: (filtertype: string) => void;
  filterlist: string[];
}

function SideBar({
  handleJobFilter,
  filterlist,
  handleEmpFilter,
  handleDatefilter,
}: props) {
  return (
    <>
      <Flex marginLeft={10} marginTop={10} padding={5}>
        <VStack spacing={1}>
          <Heading size={"sm"}>Filters: </Heading>
          <SimpleGrid columns={2} spacing={2}>
            {filterlist.map((data) => (
              <Alert status="info" margin={1} key={data}>
                <AlertIcon />
                {data}
              </Alert>
            ))}
          </SimpleGrid>
          <EmploymentFilter
            onDatefilterClick={(filtername) => handleDatefilter(filtername)}
            onJobTypefilterClick={(filtername) => handleJobFilter(filtername)}
            onEmpTypefilterClick={(filtername) => handleEmpFilter(filtername)}
          />
        </VStack>
      </Flex>
    </>
  );
}

export default SideBar;
