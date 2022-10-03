import { Heading, Link as ChakraLink } from "@chakra-ui/react";
import { css } from "@emotion/css";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { breed } = context.query;

  if ((breed as string)?.split("")[0] === "%") {
    return {
      props: { url: "chuj", status: "success" },
    };
  }

  // const res = await fetch(`https://dog.cseo/api/breed/${breed.trim().toLowerCase()}/images/random`);
  // const data: { message: string; status: "success" | "error" } =
  //   await res.json();

  return {
    // props: { url: data.message, status: data.status },
    props: { url: "chuj", status: "success" },
  };
};

const Dog = ({ url, status }: any) => {
  const router = useRouter();
  const { breed } = router.query;

  if (status === "error") {
    return (
      <Heading>
        ✨ <span dangerouslySetInnerHTML={{ __html: breed as string }} />✨ not
        found!
      </Heading>
    );
  }

  return (
    <div className={linkContainer}>
      <Link href="/">
        <ChakraLink>Go Back!</ChakraLink>
      </Link>
      <div className={dogContainer}>
        <img src={url} alt="" />
        <Heading>
          ✨ <span dangerouslySetInnerHTML={{ __html: breed as string }} />✨
        </Heading>
      </div>
    </div>
  );
};

const dogContainer = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  span: {
    textTransform: "capitalize",
  },
  img: {
    borderRadius: "100%",
    borderStyle: "solid",
    borderWidth: 10,
    borderColor: "var(--chakra-colors-pink-100)",
    width: 500,
    height: 500,
    objectFit: "cover",
  },
});

const linkContainer = css({
  a: { position: "absolute", fontSize: "2rem", top: "5rem", left: "10rem" },
});

export default Dog;

// http://localhost:3000/dog?breed=%3Cimg%20onerror=alert(window.localStorage)%20src/%3E

//http://localhost:3000/dog?breed=%3Cimg%20onerror=%22document.querySelector(%27body%27).innerHTML=%27%3Cimg%20src=https://www.shitpostbot.com/resize/585/400?img=%2Fimg%2Fsourceimages%2Fshrek-snap-5b39ca5d829fb.png/%3E%27%22%20src/%3E
