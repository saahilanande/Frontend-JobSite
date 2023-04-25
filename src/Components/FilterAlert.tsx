import { Alert, AlertIcon } from "@chakra-ui/react";
interface props {
  children: string;
}

function FilterAlert({ children }: props) {
  return (
    <Alert status="info">
      <AlertIcon />
      {children}
    </Alert>
  );
}

export default FilterAlert;
