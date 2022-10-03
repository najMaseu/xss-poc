import { Heading } from "@chakra-ui/react";
import { css } from "@emotion/css";

export const Title = () => (
  <div className={titleContainer}>
    <Heading color="white" fontSize="8xl">
      Dogesearch
    </Heading>
    <img src="/doge2.png" />
  </div>
);

const titleContainer = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  img: {
    width: 300,
    position: "absolute",
    right: -140,
    top: -190,
  },
  "& :first-child": {
    zIndex: 10,
  },
});
