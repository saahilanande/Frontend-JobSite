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
  onfilterClick: (filtername: string) => void;
}

function EmploymentFilter({ onfilterClick }: props) {
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

            <AccordionPanel>
              <CheckboxGroup colorScheme="blue" size={"lg"}>
                <VStack padding={1}>
                  <Checkbox
                    value="fullTime"
                    onChange={() => onfilterClick("fullTime")}
                  >
                    Full-Time
                  </Checkbox>
                  <Checkbox
                    value="partTime"
                    onChange={() => onfilterClick("partTime")}
                  >
                    Part-Time
                  </Checkbox>
                  <Checkbox
                    value="contract"
                    onChange={() => onfilterClick("contract")}
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

            <AccordionPanel>
              <CheckboxGroup colorScheme="blue" size={"lg"}>
                <VStack padding={1}>
                  <Checkbox onChange={() => onfilterClick("remote")}>
                    Remote
                  </Checkbox>
                  <Checkbox onChange={() => onfilterClick("onSite")}>
                    On-Site
                  </Checkbox>
                  <Checkbox onChange={() => onfilterClick("hybrid")}>
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

            <AccordionPanel>
              <Center>
                <List>
                  <ListItem>
                    <Button variant="link" size={"lg"}>
                      Any time
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button variant="link" size={"lg"}>
                      Past 24 hours
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button variant="link" size={"lg"}>
                      Past week
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button variant="link" size={"lg"}>
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
