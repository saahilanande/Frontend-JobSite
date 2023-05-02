import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  HStack,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { User } from "../Hooks/useFetchUser";
import {
  ChevronRightIcon,
  AtSignIcon,
  ViewOffIcon,
  ViewIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import { useFormik } from "formik";

interface props {
  onClose: () => void;
  isOpen: boolean;
  userData: User | undefined;
}

function ProfileEdit({ onClose, isOpen, userData }: props) {
  //    const {handleSubmit} = useFormik({})
  const [show, setShow] = useState(false);

  return (
    <>
      <Modal size={"lg"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader fontFamily={"sans-serif"}>About you</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={() => {}}>
              <FormControl>
                <FormLabel marginTop={3}>First Name</FormLabel>
                <InputGroup marginTop={3}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<ChevronRightIcon color="gray.600" />}
                  />
                  <Input
                    id="firstnametxt"
                    value={userData?.first_name}
                    size="md"
                    type="text"
                    placeholder="First Name"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel marginTop={3}>Last Name</FormLabel>
                <InputGroup marginTop={3}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<ChevronRightIcon color="gray.600" />}
                  />
                  <Input
                    id="lastnametxt"
                    value={userData?.last_name}
                    size="md"
                    type="text"
                    placeholder="Last Name"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel marginTop={3}>Email</FormLabel>
                <InputGroup marginTop={3}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<AtSignIcon color="gray.600" />}
                  />
                  <Input
                    id="emailtxt"
                    value={userData?.email}
                    size="md"
                    type="email"
                    placeholder="example@.com"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel marginTop={3}>Password</FormLabel>
                <InputGroup marginTop={3}>
                  <Input
                    id="passwordtxt"
                    value={userData?.password}
                    size="md"
                    type={show ? "text" : "password"}
                    placeholder="password"
                  />
                  <InputRightElement>
                    <Button
                      leftIcon={show ? <ViewOffIcon /> : <ViewIcon />}
                      h="1.75rem"
                      size="md"
                      onClick={() => setShow(!show)}
                      marginRight={3}
                      variant={"ghost"}
                    ></Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel marginTop={3}>Mobile Number</FormLabel>
                <InputGroup marginTop={3}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.600" />}
                  />
                  <Input
                    type="tel"
                    value={userData?.phone}
                    placeholder="Phone number"
                    id="phonetxt"
                    size="md"
                  />
                </InputGroup>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <HStack spacing={1}>
              <Button onClick={onClose}>Close</Button>
              <Button colorScheme="blue" onClick={() => {}}>
                Update
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfileEdit;
