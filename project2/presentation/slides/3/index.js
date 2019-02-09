import React from "react";
import { Appear, Heading, List, ListItem, Slide, Text } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="#282C33" textColor="tertiary">
    <Heading size="4" textColor="secondary">...in short about main features:</Heading>

  <Appear>
    <List>
      <ListItem><b>JSX:</b>
        <Text textColor="#666"><small>is JavaScript syntax extension. It isn't
          necessary to use JSX in React development, but it is recommended.</small></Text>
      </ListItem>
      <ListItem><b>Components:</b>
        <Text textColor="#666"><small>everything is a component, which renders in browser.
        </small></Text>
      </ListItem>
      <ListItem><b>Unidirectional data flow and Flux:</b>
        <Text textColor="#666"><small>React implements one-way data flow. Flux is a pattern
          that helps keeping your data unidirectional.</small></Text>
      </ListItem>
    </List>
  </Appear>
  </Slide>
);
