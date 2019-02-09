import React from "react";
import { Appear, List, ListItem, Slide, Heading, Text } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="#282C33"
    textColor="tertiary" align="center flex-start"
  >

    <Heading size="3" textColor="secondary">JSX</Heading>
    <Appear>
      <Text textColor="#666" textAlign="justify">React uses JSX for
        templating instead of regular JavaScript. It is not necessary
        to use it, however, following are some pros that come with it.
      </Text>
    </Appear>

    <Appear>
      <List>
        <ListItem>It is faster because it performs optimization while
          compiling code to JavaScript.</ListItem>
        <ListItem>It is also type-safe and most of the errors can be
          caught during compilation.</ListItem>
        <ListItem>It makes it easier and faster to write templates,
          if you are familiar with HTML.</ListItem>
        <ListItem>Files have extension *.JSX</ListItem>
      </List>
    </Appear>

  </Slide>
);
