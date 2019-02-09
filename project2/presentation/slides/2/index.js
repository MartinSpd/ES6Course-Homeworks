import React from "react";
import { Appear, Heading, List, ListItem, Slide, Text } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="#282C33" textColor="tertiary">
    <Heading size="3" textColor="secondary">React.js</Heading>

    <Text margin="40px 0" textColor="tertiary" textAlign="justify">
    React.js is a front end framework created by Facebook Inc. to build user
    interfaces. React.js comes with these features:
    </Text>

    <Appear>
      <List>
        <ListItem>JSX</ListItem>
        <ListItem>Components</ListItem>
        <ListItem>Unidirectional data flow</ListItem>
        <ListItem>Flux</ListItem>
      </List>
    </Appear>
  </Slide>

);
