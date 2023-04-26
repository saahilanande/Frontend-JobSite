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
  handleFilter: (filtertype: string) => void;
  filterlist: string[];
}

function SideBar({ handleFilter, filterlist }: props) {
  return (
    <>
      <Flex marginLeft={10} marginTop={10}>
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
            onfilterClick={(filtername) => handleFilter(filtername)}
          />
        </VStack>
      </Flex>
    </>
  );
}

export default SideBar;
