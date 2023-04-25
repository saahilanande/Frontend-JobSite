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

function EmploymentFilter() {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton
              _expanded={{ bg: "#3182ce", color: "white" }}
              margin={3}
            >
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
                  <Checkbox value="FullTime">Full-Time</Checkbox>
                  <Checkbox value="PartTime">Part-Time</Checkbox>
                  <Checkbox value="Contract">Contracts</Checkbox>
                </VStack>
              </CheckboxGroup>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton
              _expanded={{ bg: "#3182ce", color: "white" }}
              margin={3}
            >
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
                <VStack>
                  <Checkbox value="FullTime">Remote</Checkbox>
                  <Checkbox value="PartTime">On Site</Checkbox>
                  <Checkbox value="Contract">Hybrid</Checkbox>
                </VStack>
              </CheckboxGroup>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton
              _expanded={{ bg: "#3182ce", color: "white" }}
              margin={3}
            >
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
                    <Button>Today</Button>
                  </ListItem>
                  <ListItem>
                    <Button>1 Week</Button>
                  </ListItem>
                  <ListItem>
                    <Button>30 days ago</Button>
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
