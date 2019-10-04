import React from "react";
import { Button } from "../UI/Basic/basicStyle";
const Home: React.FC = () => {
  return (
    <>
      <div>this is home page</div>
      <Button
        href="https://github.com/styled-components/styled-components"
        target="_blank"
        rel="noopener"
        primary
      >
        GitHub
      </Button>
    </>
  );
};
export default Home;
