import { Button, Divider, HStack, Img, Spacer } from "@chakra-ui/react";
import AvatarMenu from "./AvatarMenu";
import logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";

interface props {
  buttonName: string;
  onbuttonclick: () => void;
  onMyJobClick: () => void;
  onMyJobClicked: boolean;
}

function Navbar({
  buttonName,
  onbuttonclick,
  onMyJobClick,
  onMyJobClicked,
}: props) {
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
          marginLeft={"16"}
          marginRight={"32"}
          onClick={() => {
            navigate("/home");
            window.location.reload();
          }}
        ></Img>
        {location.pathname === "/home" ? (
          <>
            <Button
              variant="link"
              size={"lg"}
              onClick={() => onMyJobClick()}
              colorScheme={onMyJobClicked ? "blue" : "gray"}
            >
              My Jobs
            </Button>
            <Divider orientation="vertical" height={10} bgColor={"gray"} />
            <Button
              variant="link"
              size={"lg"}
              onClick={() => {
                navigate("/profile");
              }}
            >
              My Profile
            </Button>
          </>
        ) : null}
        <Spacer />
        <Button
          colorScheme="blue"
          variant={"outline"}
          borderRadius={25}
          onClick={() => onbuttonclick()}
        >
          {buttonName}
        </Button>
        <Divider orientation="vertical" height={10} bgColor={"gray"} />
        <ColorModeSwitch />
        <AvatarMenu />
      </HStack>
    </>
  );
}

export default Navbar;
