import { makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

// const theme = createMuiTheme({
//   palette: {
//     background: {
//       paper: "#00ff00",
//       default: "#ff0000",
//     },
//   },
// });
const myStyles = makeStyles((theme) => ({
  trolulu: {
    textAlign: "center",
  },
  large: {
    width: theme.spacing(35),
    height: theme.spacing(35),
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: "10rem",
  },
  cardi: {
    // textAlign: "center",
    // width: "300px",
    // height: "300px",
    height: "100%",
  },
  flipCard: {
    backgroundColor: "transparent",
    width: "300px",
    height: "300px",
    perspective: "1000px",
    borderRadius: "50%",
  },

  flipCardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    // textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    // boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius: "50%",
    /*     "&:hover": {
      transform: "rotateY(180deg)",
    }, */
  },
  flipCardFront: {
    position: "absolute",
    width: "100%",
    height: "100%",
    "-webkit-backface-visibility": "hidden",
    "backface-visibility": "hidden",
  },
  flipCardBack: {
    backgroundColor: "#2980b9",
    /* color: white; */
    position: "absolute",
    // textAlign: "center",
    width: "100%",
    height: "100%",
    transform: "rotateY(180deg)",
    borderRadius: "50%",
    "-webkit-backface-visibility": "hidden",
    "backface-visibility": "hidden",
  },
  flipCardFlipping: {
    position: "relative",
    width: "100%",
    height: "100%",
    // textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    // boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius: "50%",
    transform: "rotateY(180deg)",
  },
}));

export default myStyles;
