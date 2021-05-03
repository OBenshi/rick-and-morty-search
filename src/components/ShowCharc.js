import React, { useState, useEffect } from "react";
import { flexbox } from "@material-ui/system";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import "../App.css";
function ShowCharc(props) {
  const character = props.currentCharacter;
  return (
    <div m={1} p={6} className="flip-card" id={character.name}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={character.image} alt={character.name} className="charImg"></img>
              </div><div className="flip-card-back"> <p>{character.name}</p><p>hello</p></div>
      </div>
    </div>
  );
}

export default ShowCharc;
