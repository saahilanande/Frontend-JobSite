import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { wrap } from "framer-motion";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

interface props {
  onSearchClick: (title: string) => void;
}

function SearchBox({ onSearchClick }: props) {
  const [titleString, setTitleString] = useState("");
  const bluemode = useColorModeValue("#3182ce", "#ED8936");
  return (
    <>
      <HStack spacing={2} marginRight={10} marginLeft={10}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            borderLeftRadius={25}
            borderRightRadius={25}
            children={<IoSearchSharp color={bluemode} />}
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
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            borderLeftRadius={25}
            borderRightRadius={25}
            children={<MdLocationOn color={bluemode} />}
          />
          <Input
            type="text"
            id="titleTxt"
            placeholder="California"
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
          width={"20%"}
        >
          Search Jobs
        </Button>
      </HStack>
    </>
  );
}

export default SearchBox;
