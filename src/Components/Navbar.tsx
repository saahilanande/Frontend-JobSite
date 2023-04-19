import { Button, Divider, HStack, Img, Spacer } from "@chakra-ui/react";
import AvatarMenu from "./AvatarMenu";
import logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/login")
    return (
      <>
        <HStack spacing="13px" marginLeft={5} marginRight={5}>
          <Img
            _hover={{ cursor: "pointer" }}
            src={""}
            boxSize={"60px"}
            padding={1}
          ></Img>
          <Spacer />
          <Button
            colorScheme="blue"
            variant={"outline"}
            borderRadius={25}
            onClick={() => {
              navigate("/register");
            }}
          >
            Sign in
          </Button>
          <Divider orientation="vertical" height={10} borderWidth={"1px"} />
          <ColorModeSwitch />
          <AvatarMenu />
        </HStack>
      </>
    );
  return (
    <>
      <HStack spacing="13px" marginLeft={5} marginRight={5}>
        <Img
          _hover={{ cursor: "pointer" }}
          src={logo}
          boxSize={"60px"}
          padding={1}
        ></Img>
        <Spacer />
        <ColorModeSwitch />
        <AvatarMenu />
      </HStack>
    </>
  );
}

export default Navbar;
