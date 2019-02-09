import React from "react";
import { Heading, Link, Slide, Text } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="#282C33" textColor="tertiary" align="center flex-start">
    <Heading size={6} textColor="tertiary">Sources</Heading>

    <br />
    <Text textAlign="left">
      <Link href="https://www.tutorialspoint.com/reactjs/" target="_blank">Tutorialspoint - React.js</Link>
    </Text>
  </Slide>
);
