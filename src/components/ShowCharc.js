import React, { useState, useEffect } from "react";
import { flexbox } from "@material-ui/system";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import "../App.css";
// const [characters, setCharacters] = useState([]);
const flipIt = (e, fromWhere) => {
  console.log(9)
  let rightSpot=3
  if (fromWhere === "fromFront") {
    rightSpot = 3;
  } else if (fromWhere === "fromBehind") {
   rightSpot = 2;
  }
  console.log("befor logic",e.nativeEvent.path) 
  if (e.nativeEvent.path[rightSpot].className.includes("xlip")) {
    console.log("if path", e.nativeEvent.path[rightSpot])
     e.nativeEvent.path[rightSpot].className = "flip-card";
   
  } else { console.log("else path", e.nativeEvent.path[rightSpot]);  e.nativeEvent.path[rightSpot].className = "flip-card xlip"}
};
function ShowCharc(props) {
  const character = props.currentCharacter;
  return (
    <Box m={1} p={1}>
      <div className="flip-card" id={character.id} >
        <div className="flip-card-inner" >
          <div className="flip-card-front">
            <img src={character.image} alt={character.name} className="charImg" onClick={(e)=>flipIt(e,"fromFront") }/>
          </div>
          <div className="flip-card-back" onClick={(e)=>flipIt(e,"fromBehind") }>
            <p  className="charImg" >{character.name}</p>
          </div>
        </div>
      </div>
    </Box>
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
