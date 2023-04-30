import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

interface props {
  onTitleSearchClick: (title: string) => void;
  onLocationSearchClick: (location: string) => void;
}

function SearchBox({ onTitleSearchClick, onLocationSearchClick }: props) {
  const [titleString, setTitleString] = useState("");
  const [locationString, setLocationString] = useState("");
  const bluemode = useColorModeValue("#3182ce", "#ED8936");
  return (
    <>
      <HStack
        spacing={2}
        marginRight={10}
        marginLeft={10}
        paddingLeft={5}
        paddingRight={5}
      >
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
            id="locationtxt"
            placeholder="California"
            borderLeftRadius={25}
            borderRightRadius={25}
            value={locationString}
            onChange={(val) => setLocationString(val.target.value)}
          />
        </InputGroup>
        <Button
          borderLeftRadius={25}
          borderRightRadius={25}
          colorScheme="blue"
          onClick={() => {
            onTitleSearchClick(titleString);
            onLocationSearchClick(locationString);
          }}
          width={"25%"}
        >
          Search Jobs
        </Button>
      </HStack>
    </>
  );
}

export default SearchBox;
