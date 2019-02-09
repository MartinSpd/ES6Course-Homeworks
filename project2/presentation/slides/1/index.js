import React from "react";
import { Heading, Slide, Text } from "spectacle";

const images = {
  reactLogo: require("../../../assets/reactjs.jpg")
};

const reactLogoImg = {
  backgroundImage: `url(${images.reactLogo})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "60%",
  backgroundPosition: "50px 50px"
};

export default (
    <Slide transition={["zoom", "slide"]} bgColor="#282C33" style={reactLogoImg}>
        <Heading size="5" lineHeight={1} textColor="#82D7F7">
        A JavaScript library for building user interfaces
        </Heading>
        <Text margin="50px 0 -20px" textColor="tertiary" size={1}>
          <b>Martin Spodniak</b>
        </Text>
        <Text margin="50px 0 -800px" textColor="#666" size={7}>
          <small>February 10, 2019</small>
        </Text>
    </Slide>
);
