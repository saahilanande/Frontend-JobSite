import { HStack, Input } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <>
      <HStack spacing="13px" marginLeft={5} marginRight={5}>
        HELLOOO
        <Input width={"100%"} placeholder="hello"></Input>
      </HStack>
    </>
  );
}

export default Navbar;
