import { Button, Input } from "@chakra-ui/react";
import { css } from "@emotion/css";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

export const Searchbar = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/dog?breed=${searchTerm.trim()}`);
  };

  return (
    <form onSubmit={onFormSubmit} className={searchContainer}>
      <Input
        color="white"
        focusBorderColor="none"
        size="lg"
        variant="flushed"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <Button type="submit" size="lg" colorScheme="pink">
        Search!
      </Button>
    </form>
  );
};

const searchContainer = css({
  display: "flex",
  justifyContent: "start",
  gap: "1rem",
});
