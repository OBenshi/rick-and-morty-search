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
  const [searchText, setSearchText] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };
  const filteredChar = characters.filter((character) => {
    return character.name.toUpperCase().includes(searchText.toUpperCase());
  });
  useEffect(() => {
    fetchApi();
  });

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="">
      <div>
        <label htmlFor="searchInput">Search: </label>
        <input
          id="searchInput"
          type="text"
          onChange={handleSearchInputChange}
        />
      </div>
      {characters.length !== 0 ? (
        filteredChar.map((character) => {
          return <ShowCharc currentCharacter={character} />;
        })
      ) : (
        <p>loading..</p>
      )}
    </Box>
  );
}

export default SayHi;
