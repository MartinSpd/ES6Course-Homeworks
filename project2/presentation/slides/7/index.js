import React from "react";
import { Appear, Heading, Slide, Text } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="#282C33" textColor="tertiary"
    align="center flex-start"
  >
    <Heading size="3" textColor="secondary">Components</Heading>

    <br />
    <Appear>
      <Text textColor="#666" textAlign="justify">Components help make the app easier
        to maintain nd can be updated without affecting the rest of the page.
        Components can have own state like in previous example. Therefore these
        are called stateless components.
      </Text>
    </Appear><br />

    <Appear>
      <Text textColor="#666" textAlign="justify">State is defined in constructor on
        the top of the component.</Text>
    </Appear>
  </Slide>
);

/*

*/
