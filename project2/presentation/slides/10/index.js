import React from "react";
import { Heading, Slide, Text, Appear } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="#282C33" textColor="tertiary"
    align="center flex-start"
  >
    <Heading size="4" textColor="secondary">About props</Heading>

    <br />
    <Appear>
      <Text textColor="#666" textAlign="justify">The main difference between
      state and props is that props are immutable. This is why the container
      component should define the state that can be updated and changed, while
      the child components should only pass data from the state using props.
      </Text>
    </Appear>

  <br />
  <Appear>
    <Heading size="6" textColor="secondary">Using props</Heading>
  </Appear>

<br />
<Appear>
  <Text textColor="#666" textAlign="justify">When we need immutable data in our
    component, we can just add props.
  </Text>
</Appear>
  </Slide>
);
