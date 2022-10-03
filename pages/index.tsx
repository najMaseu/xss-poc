import { css } from "@emotion/css";
import type { NextPage } from "next";
import { Searchbar } from "../components/Searchbar";
import { Title } from "../components/Title";

const Home: NextPage = () => {
  return (
    <div className={pageContainer}>
      <Title />
      <Searchbar />
    </div>
  );
};

const pageContainer = css({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export default Home;
