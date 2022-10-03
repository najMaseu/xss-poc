import { Button, Input } from "@chakra-ui/react";
import { css } from "@emotion/css";

export const Searchbar = () => (
  <div className={searchContainer}>
    <Input color="white" focusBorderColor="none" size="lg" variant="flushed" />
    <Button size="lg" colorScheme="pink">
      Search!
    </Button>
  </div>
);

const searchContainer = css({
  display: "flex",
  justifyContent: "start",
  gap: "1rem",
});
