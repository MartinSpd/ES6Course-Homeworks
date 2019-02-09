import React from "react";
import { Appear, Heading, List, ListItem, Slide, Text } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="#282C33" textColor="tertiary"
    align="center flex-start"
  >
    <Heading size="4" textColor="secondary">Flux concept</Heading>

    <br />
    <Text textColor="#666" textAlign="justify">
      Can be explained with following steps:
    </Text>

    <Appear>
      <List>
        <ListItem><b>Actions</b>
          <Text textColor="#666" textAlign="justify"><small>
            Actions are sent to the dispatcher to trigger the data flow.
          </small></Text></ListItem>
        <ListItem><b>Dispatcher</b>
          <Text textColor="#666" textAlign="justify"><small>
            This is a central hub of the app. All the data is dispatched and
            sent to the stores.</small></Text>
        </ListItem>
        <ListItem><b>Store</b>
          <Text textColor="#666" textAlign="justify"><small>
            Store is the place where the application state and logic are held.
            Every store is maintaining a particular state and it will update
            when needed.</small></Text>
        </ListItem>
        <ListItem><b>View</b>
          <Text textColor="#666" textAlign="justify"><small>
            The view will receive data from the store and re-render the app.
          </small></Text>
        </ListItem>
      </List>
    </Appear>
  </Slide>
);
