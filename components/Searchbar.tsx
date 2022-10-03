import { Button, Input } from "@chakra-ui/react";
import { css } from "@emotion/css";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

export const Searchbar = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const onSearchClick = () => {
    router.push(`/dog?breed=${searchTerm.trim()}`);
  };

  return (
    <div className={searchContainer}>
      <Input
        color="white"
        focusBorderColor="none"
        size="lg"
        variant="flushed"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <Button onClick={onSearchClick} size="lg" colorScheme="pink">
        Search!
      </Button>
    </div>
  );
};

const searchContainer = css({
  display: "flex",
  justifyContent: "start",
  gap: "1rem",
});
