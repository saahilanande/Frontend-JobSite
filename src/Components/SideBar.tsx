import { Flex } from "@chakra-ui/react";
import React from "react";
import EmploymentFilter from "./EmploymentFilter";

function SideBar() {
  return (
    <>
      <Flex marginLeft={3}>
        <EmploymentFilter />
      </Flex>
    </>
  );
}

export default SideBar;
