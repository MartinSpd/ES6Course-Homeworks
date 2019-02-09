// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Slide
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
};

preloader(images);

const theme = createTheme({
  primary: "black",
  secondary: "#03A9FC",
  tertiary: "white",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const slidesImports = [
  import("./slides/1"),
  import("./slides/2"),
  import("./slides/3"),
  import("./slides/4"),
  import("./slides/5"),
  import("./slides/6"),
  import("./slides/7"),
  import("./slides/8"),
  import("./slides/9"),
  import("./slides/10"),
  import("./slides/11"),
  import("./slides/12"),
  import("./slides/13"),
  import("./slides/14")
];

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />)
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
    });
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck
        progress="pacman"
        theme={theme}
        transition={["fade"]}
        transitionDuration={500}
      >
        {
          slides.map((slide, index) => {
            return React.cloneElement(slide, { key: index });
          })
        }
      </Deck>
    );
  }
}
