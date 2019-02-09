import React from "react";
import { Heading, Slide, Text } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="#282C33" textColor="tertiary"
    align="center flex-start"
  >
    <Heading size="6" textColor="secondary">Stateful example</Heading>

    <br />
    <Text textColor="#666" textAlign="left">In next example is assigned state
      to App component.</Text>

    <Text textAlign="justify">
      <br /><small><code>
      {"import React from 'react';"}<br /><br />

      {"class App extends React.Component {"}<br />

      &nbsp;&nbsp;{"constructor() {"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;{"super();"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;{"this.state = {"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       {"data = { \"id\":1, \"name\":\"Foo\", ... }"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br />
      &nbsp;&nbsp;{"}"}<br />

      &nbsp;&nbsp;{"render() {"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;{"return ( <div>Hello World!!!</div> );"}<br />
      &nbsp;&nbsp;{"}"}<br />
      {"}"}<br />
      {""}<br />
      {"export default App;"}
      </code></small>
    </Text>
  </Slide>
);
