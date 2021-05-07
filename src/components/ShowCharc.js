import React, { useState, useEffect } from "react";
import { flexbox } from "@material-ui/system";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
// import "../App.css";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import ScaleText from "react-scale-text";
import { Paper } from "@material-ui/core";
import { Avatar, Button } from "@material-ui/core";
import ResponsiveDialog from "./test.js";

// const [characters, setCharacters] = useState([]);
/* const flipIt = (e, fromWhere) => {
  console.log(e)
  let rightSpot=3
  if (e.nativeEvent.path.length ===13) {
    rightSpot = 3;
  } else if (e.nativeEvent.path.length ===12) {
   rightSpot = 2;
  }
  console.log("befor logic",e.nativeEvent.path) 
  if (e.nativeEvent.path[rightSpot].className.includes("xlip")) {
    console.log("if path", e.nativeEvent.path[rightSpot])
     e.nativeEvent.path[rightSpot].className = "flip-card";
   
  } else { console.log("else path", e.nativeEvent.path[rightSpot]);  e.nativeEvent.path[rightSpot].className = "flip-card xlip"}
}; */
const useStyles = makeStyles({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: "10rem",
  },
  cardi: {
    textAlign: "center",
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
    margin: "0px",
    padding: "0px",
  },

  flipCardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    // textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
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
    // background:
    // "linear-gradient(45deg, #d977dc, #ff71b8, #ff7992, #ff8d72, #ffa55b, #feaa52, #fcb049, #f9b640, #f6a73d, #f2973c, #ed883b, #e7793c)",
    // "radial-gradient(circle, #d977dc, #ff72b3, #ff8384, #ffa55b, #fbcb47)",
    // "radial-gradient(circle, #d977dc, #f567b4, #ff6289, #fa6a61, #e7793c)",
    // "radial-gradient(circle, #d977dc, #ff71b8, #ff7992, #ff8d72, #ffa55b, #feaa52, #fcb049, #f9b640, #f6a73d, #f2973c, #ed883b, #e7793c)",
    // "radial-gradient(circle, #e7793c, #ed883b, #f2973c, #f6a73d, #f9b640, #fcb049, #feaa52, #ffa55b, #ff8d72, #ff7992, #ff71b8, #d977dc)",
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
    // textAlign: "center",s
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius: "50%",
    transform: "rotateY(180deg)",
  },
});

function ShowCharc(props) {
  const [isHover, setIsHover] = useState(false);
  const classes = useStyles();
  const character = props.currentCharacter;
  return (
    <Grid item id={`${character.name}-card`}>
      <Grid
        container
        className={classes.flipCard}
        id={character.id}
        m={0}
        p={0}
        spacing={0}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => setIsHover(false)}>
        <div
          className={
            !isHover ? classes.flipCardInner : classes.flipCardFlipping
          }>
          <div className={classes.flipCardFront}>
            <img
              src={character.image}
              alt={character.name}
              className="charImg"
            />
          </div>
          <div className={classes.flipCardBack}>
            <Container className={classes.cardi}>
              <Grid
                container
                className={classes.cardi}
                direction="column"
                justify="center"
                alignContent="center">
                <Grid item xs={6}>
                  <Typography variant="h4" align="center">
                    {character.name}
                  </Typography>
                </Grid>
                <Grid item>
                  <ResponsiveDialog character={character} />
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
export default ShowCharc;
/* 
import React from "react";
import ReactCardFlip from "react-card-flip";

function ShowCharc(props) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const character = props.currentCharacter;
  // console.log(project);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={() => setIsFlipped((prev) => !prev)} className="CardFront">
        <div>
          <img src={character.image} alt={character.name} className="charImg" />
        </div>
      </div>
      <div onClick={() => setIsFlipped((prev) => !prev)} className="CardBack">
        <p>{character.name}</p>
      </div>
    </ReactCardFlip>
  );
}

export default ShowCharc; 
 */
