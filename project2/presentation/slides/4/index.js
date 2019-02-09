import React from "react";
import { Appear, List, ListItem, Slide, Heading } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="#282C33"
    textColor="tertiary" align="center flex-start"
  >

    <Heading size="5" textColor="secondary">Advantages:</Heading>

    <Appear>
      <List>
        <ListItem>Uses virtual DOM, which is faster than the
          regular DOM.</ListItem>
        <ListItem>Can be used on client or server side or combined
          with other frameworks.</ListItem>
        <ListItem>Component and data patterns improve readability,
          which helps to maintain larger apps.</ListItem>
      </List>
    </Appear>

    <Appear><Heading size="5" textColor="secondary">Limitations:
    </Heading></Appear>

    <Appear>
      <List>
        <ListItem>React can only render data, functional part have to
          do other frameworks.</ListItem>
        <ListItem>Uses inline templating and JSX, which might be
          unfamiliar to some developers.</ListItem>
      </List>
    </Appear>

  </Slide>
);
