import React from "react";
import { Appear, Heading, List, ListItem, Slide } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="#282C33" textColor="tertiary"
    align="center flex-start"
  >
    <Heading size="6" textColor="secondary">Flux pros:</Heading>


    <Appear>
      <List>
        <ListItem>Single directional data flow is easy to understand.
        </ListItem>
        <ListItem>The app is easier to maintain.</ListItem>
        <ListItem>The app parts are decoupled.</ListItem>
      </List>
    </Appear>
  </Slide>
);
