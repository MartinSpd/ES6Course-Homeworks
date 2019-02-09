import React from "react";
import { Heading, Slide, Text } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="#282C33" textColor="tertiary"
    align="center flex-start"
  >
    <Heading size="6" textColor="secondary">Using props example code</Heading>

    <br /><Text textColor="#666" textAlign="left"><small>App.jsx:</small></Text>

    <Text textAlign="left">
      <small><code>
      {"import React from 'react';"}<br /><br />

      {"class App extends React.Component {"}<br />
      &nbsp;&nbsp;{"render() {"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;{"return ("}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<div>"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {"<h1>{this.props.headerProp}</h1>"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {"<h2>{this.props.contentProp}</h2>"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</div>"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;{");"}<br />
      &nbsp;&nbsp;{"}"}<br />
      {"}"}<br />
      {""}<br />
      {"export default App;"}
      </code></small>
    </Text>
  </Slide>
);
