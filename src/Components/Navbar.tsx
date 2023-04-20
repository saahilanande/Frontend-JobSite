import { Button, Divider, HStack, Img, Spacer } from "@chakra-ui/react";
import AvatarMenu from "./AvatarMenu";
import logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <HStack spacing="13px" marginLeft={10} marginRight={5}>
        <Img
          _hover={{ cursor: "pointer" }}
          src={logo}
          padding={1}
          maxWidth={40}
          maxHeight={20}
        ></Img>
        <Spacer />
        <Button
          colorScheme="blue"
          variant={"outline"}
          borderRadius={25}
          onClick={
            location.pathname === "/login"
              ? () => {
                  navigate("/register");
                }
              : () => {
                  navigate("/login");
                }
          }
        >
          {location.pathname === "/login" ? "Sign in" : "Login"}
        </Button>
        <Divider orientation="vertical" height={10} borderWidth={"1px"} />
        <ColorModeSwitch />
        <AvatarMenu />
      </HStack>
    </>
  );
}

export default Navbar;
