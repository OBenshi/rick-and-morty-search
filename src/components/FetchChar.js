import React, { useState, useEffect } from "react";
import ShowCharc from "./ShowCharc.js";
import { flexbox } from "@material-ui/system";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
// import {spacing} from '@material-ui/system'
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
function SayHi() {
  const [characters, setCharacters] = useState([]);
  const [nextFetch, setNextFetch] = useState("");
  const [backFetch, setBackFetch] = useState("");
  const [nxtEndpointUrl, setNextEndpointUrl] = useState(
    "https://rickandmortyapi.com/api/character/"
  );
  const fetchApi = () => {
    // if prev !=null fetch prev
    fetch(nxtEndpointUrl)
      .then((response) => response.json())
      .then((data) => {
        setBackFetch(data.info.prev);
        setNextFetch(data.info.next);
        setCharacters(data.results);
      });
  };
  const [searchText, setSearchText] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleApiPage = (nextOrBack) => {
    console.log(nextFetch);
    if (nextOrBack == "next") {
      setNextEndpointUrl(nextFetch);
    } else if (nextOrBack == "back") {
      setNextEndpointUrl(backFetch);
    }
  };

  const filteredChar = characters.filter((character) => {
    return character.name.toUpperCase().includes(searchText.toUpperCase());
  });
  useEffect(() => {
    fetchApi();
  }, [nxtEndpointUrl]);
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="row"
      spacing={3}>
      <Grid item xs={12} m={5} p={5}>
        <label htmlFor="searchInput">Search: </label>
        <input
          id="searchInput"
          type="text"
          onChange={handleSearchInputChange}
        />
      </Grid>
      {/* </Grid>{nxt!=null&&} */}

      <Grid item xs={1}>
        {backFetch != null && (
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => {
              handleApiPage("back");
            }}>
            <ArrowBackIosIcon />
          </Fab>
        )}
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={7} justify="center" alignItems="center">
          {characters.length !== 0 ? (
            filteredChar.map((character) => {
              return <ShowCharc currentCharacter={character} />;
            })
          ) : (
            <Backdrop open={true}>
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
        </Grid>
      </Grid>
      <Grid item xs={1}>
        {nextFetch !== null && (
          <Fab
            color="primary"
            aria-label="next"
            onClick={() => {
              handleApiPage("next");
            }}>
            <ArrowForwardIosIcon />
          </Fab>
        )}
      </Grid>
    </Grid>
  );
}

export default SayHi;
