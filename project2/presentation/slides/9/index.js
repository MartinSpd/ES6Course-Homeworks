import React from "react";
import { Heading, Slide, Text, Appear } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="#282C33" textColor="tertiary"
    align="center flex-start"
  >
    <Heading size="4" textColor="secondary">State</Heading>

    <br />
    <Appear>
      <Text textColor="#666" textAlign="justify">State is the place where the
        data comes from. We should always try to make our state as simple as
        possible and minimize the number of stateful components. If we have,
        for example, ten components that need data from the state, we should
        create one container component that will keep the state for all of
        them. Example is on previous slide.
      </Text>
    </Appear>
  </Slide>
);
