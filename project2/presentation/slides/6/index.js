import React from "react";
import { Appear, Heading, Slide, Text } from "spectacle";

export default (
  <Slide transition={["zoom", "slide"]} bgColor="#282C33"
    textColor="tertiary" align="left"
  >
    <Heading size="3" textColor="secondary">... a sample JSX code</Heading>

    <br /><Text textColor="#666" textAlign="left"><small>App.jsx:</small></Text>

    <Text textAlign="left">
      <small><code>
      {"import React from 'react';"}<br /><br />

      {"class App extends React.Component {"}<br />
      &nbsp;&nbsp;{"render() {"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;{"return ("}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {"<div>Hello World!!!</div>"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;{");"}<br />
      &nbsp;&nbsp;{"}"}<br />
      {"}"}<br />
      {""}<br />
      {"export default App;"}
      </code></small>
    </Text>

  <br />
  <Appear>
  <Text textColor="#666" textAlign="justify">Even though it's similar to
    HTML, there are a couple of things we need to keep in mind when working
    with JSX.</Text></Appear>

  </Slide>
);
