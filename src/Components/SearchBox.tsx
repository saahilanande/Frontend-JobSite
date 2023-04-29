import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiDocumentSearch } from "react-icons/hi";

interface props {
  onSearchClick: (title: string) => void;
}

function SearchBox({ onSearchClick }: props) {
  const [titleString, setTitleString] = useState("");
  return (
    <>
      <HStack spacing={2} marginRight={10} marginLeft={10}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            borderLeftRadius={25}
            borderRightRadius={25}
            children={<HiDocumentSearch color="gray" />}
          />
          <Input
            type="text"
            id="titleTxt"
            placeholder="Full Stack Developer"
            borderLeftRadius={25}
            borderRightRadius={25}
            value={titleString}
            onChange={(val) => setTitleString(val.target.value)}
          />
        </InputGroup>
        <Button
          borderLeftRadius={25}
          borderRightRadius={25}
          colorScheme="blue"
          onClick={() => onSearchClick(titleString)}
        >
          Search Jobs
        </Button>
      </HStack>
    </>
  );
}

export default SearchBox;
