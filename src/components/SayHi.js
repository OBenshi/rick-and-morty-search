import React, { useState, useEffect } from "react";
import ShowCharc from "./ShowCharc.js";
import { flexbox } from "@material-ui/system";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
// import {spacing} from '@material-ui/system'
function SayHi() {
  const [characters, setCharacters] = useState([]);
  const fetchApi = () => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  };
  useEffect(() => {
    fetchApi();
  });

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems=""
    >
      {characters.length !== 0 ? (
        characters.map((character) => {
          return <ShowCharc currentCharacter={character} />;
        })
      ) : (
        <p>loading..</p>
      )}
    </Box>
  );
}

export default SayHi;
