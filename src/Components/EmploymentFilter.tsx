import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  List,
  ListItem,
  VStack,
} from "@chakra-ui/react";

interface props {
  onJobTypefilterClick: (filtername: string) => void;
  onEmpTypefilterClick: (filtername: string) => void;
  onDatefilterClick: (filtername: string) => void;
}

function EmploymentFilter({
  onJobTypefilterClick,
  onEmpTypefilterClick,
  onDatefilterClick,
}: props) {
  return (
    <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton margin={2}>
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                Employment Type
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>

            <AccordionPanel marginRight={100}>
              <CheckboxGroup colorScheme="blue" size={"lg"}>
                <VStack padding={1}>
                  <Checkbox
                    value="fullTime"
                    onChange={() => onEmpTypefilterClick("fullTime")}
                  >
                    Full-Time
                  </Checkbox>
                  <Checkbox
                    value="partTime"
                    onChange={() => onEmpTypefilterClick("partTime")}
                  >
                    Part-Time
                  </Checkbox>
                  <Checkbox
                    value="contract"
                    onChange={() => onEmpTypefilterClick("contract")}
                  >
                    Contracts
                  </Checkbox>
                </VStack>
              </CheckboxGroup>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton margin={2}>
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                Work Type
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>

            <AccordionPanel marginRight={100}>
              <CheckboxGroup colorScheme="blue" size={"lg"}>
                <VStack>
                  <Checkbox onChange={() => onJobTypefilterClick("remote")}>
                    Remote
                  </Checkbox>
                  <Checkbox onChange={() => onJobTypefilterClick("onSite")}>
                    On-Site
                  </Checkbox>
                  <Checkbox onChange={() => onJobTypefilterClick("hybrid")}>
                    Hybrid
                  </Checkbox>
                </VStack>
              </CheckboxGroup>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton margin={2}>
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                Date Posted
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>

            <AccordionPanel marginRight={100}>
              <Center>
                <List>
                  <ListItem>
                    <Button
                      onClick={() => onDatefilterClick("anytime")}
                      variant={"ghost"}
                      size={"md"}
                    >
                      Any time
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      onClick={() => onDatefilterClick("today")}
                      variant={"ghost"}
                      size={"md"}
                    >
                      Past 24 hours
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      onClick={() => onDatefilterClick("week")}
                      variant={"ghost"}
                      size={"md"}
                    >
                      Past week
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      onClick={() => onDatefilterClick("month")}
                      variant={"ghost"}
                      size={"md"}
                    >
                      Past month
                    </Button>
                  </ListItem>
                </List>
              </Center>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}

export default EmploymentFilter;
