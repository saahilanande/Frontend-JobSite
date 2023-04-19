import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode, Switch, Text } from "@chakra-ui/react";

function ModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {colorMode === "dark" ? (
        <>
          <SunIcon onClick={toggleColorMode} _hover={{ cursor: "pointer" }} />{" "}
          <Text>Light</Text>
        </>
      ) : (
        <>
          <MoonIcon onClick={toggleColorMode} _hover={{ cursor: "pointer" }} />{" "}
          <Text>Dark</Text>
        </>
      )}
    </>
  );
}

export default ModeSwitcher;
