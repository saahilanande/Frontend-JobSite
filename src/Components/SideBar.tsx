import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import EmploymentFilter from "./EmploymentFilter";
import { useState } from "react";

function SideBar() {
  const [filter, setFilter] = useState<string[]>([]);
  console.log(filter);
  return (
    <>
      <Flex marginLeft={5} padding={10}>
        <VStack spacing={1}>
          <Box marginBottom={5}>
            <Heading size={"sm"}>Filters: </Heading>
          </Box>
          <EmploymentFilter
            onfilterClick={(filtername) => {
              if (filter.includes(filtername)) {
                setFilter((oldarray) =>
                  oldarray.filter((word) => word != filtername)
                );
              } else {
                setFilter((oldarray) => [...oldarray, filtername]);
              }
            }}
          />
        </VStack>
      </Flex>
    </>
  );
}

export default SideBar;
