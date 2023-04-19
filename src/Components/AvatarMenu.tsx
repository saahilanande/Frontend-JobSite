import {
  Avatar,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import logo from "../assets/avatar.png";

function AvatarMenu() {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar size={"md"} src={logo} />
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link href="https://www.linkedin.com/in/saahilpralhad/" isExternal>
              linkedin
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="https://saahilanande.netlify.app/" isExternal>
              portfolio
            </Link>
          </MenuItem>
          <MenuDivider />
          <MenuItem>
            <Link href="https://github.com/saahilanande" isExternal>
              GitHub
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default AvatarMenu;
