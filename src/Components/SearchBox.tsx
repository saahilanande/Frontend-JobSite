import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { HiDocumentSearch } from "react-icons/hi";

function SearchBox() {
  return (
    <>
      <HStack spacing={2} marginRight={10} marginLeft={10}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            borderLeftRadius={25}
            borderRightRadius={25}
            children={<HiDocumentSearch color="gray"/>}
          />
          <Input
            type="text"
            placeholder="Full Stack Developer"
            borderLeftRadius={25}
            borderRightRadius={25}
          />
        </InputGroup>
        <Button borderLeftRadius={25} borderRightRadius={25} colorScheme="blue">
          Search Jobs
        </Button>
      </HStack>
    </>
  );
}

export default SearchBox;
