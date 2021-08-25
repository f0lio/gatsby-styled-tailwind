import React from "react";
import tw, { styled } from "twin.macro";

const Container = styled.div`
  ${tw`flex flex-col p-10 border `}
`;

// shorthand version
const Text = tw.text`
  text-2xl  py-2	
`;

const Button = tw.button`
  p-3 max-w-max	 cursor-pointer text-lg font-semibold text-white bg-purple-800 border-none rounded-lg shadow-md hover:bg-white hover:text-purple-700
`;

function Home() {
  return (
    <Container>
      <Text>Tailwind classes into Styled Components.</Text>
      <Button>Hover!</Button>
    </Container>
  );
}

export default Home;
