import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode, Text, Box, HStack, Button } from "@chakra-ui/react";

function ModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {colorMode === "dark" ? (
        <Button
          leftIcon={<SunIcon />}
          variant="Ghost"
          onClick={toggleColorMode}
        >
          Light
        </Button>
      ) : (
        <Button
          leftIcon={<MoonIcon />}
          variant="Ghost"
          onClick={toggleColorMode}
        >
          Dark
        </Button>
      )}
    </>
  );
}

export default ModeSwitcher;
