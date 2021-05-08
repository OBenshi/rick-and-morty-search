import React, { useState, useEffect } from "react";
import ShowCharc from "./ShowCharc.js";
import { flexbox } from "@material-ui/system";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { fade, makeStyles } from "@material-ui/core/styles";
// import { searchText } from "AppBari.js";
import SearchIcon from "@material-ui/icons/Search";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";

import RnMLogo from "../Rick_and_Morty.svg";
const useStyles = makeStyles((theme) => ({
  grow: {
    display: "flex",
    justifyContent: "flex-end",
    background:
      "radial-gradient(circle, #d977dc, #ff71b8, #ff7992, #ff8d72, #ffa55b, #feaa52, #fcb049, #f9b640, #f6a73d, #f2973c, #ed883b, #e7793c)",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    height: "4rem",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  logi: {
    alighSelf: "flex-end",
  },
}));

function SayHi(props) {
  const classes = useStyles();
  const [Characters, setCharacters] = useState([]);
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
  const sendIt = (props, characters) => {
    props.Charactersi(() => {
      return characters;
    });
  };
  sendIt(props, Characters);

  function handleSearchInputChange(event) {
    setSearchText(event.target.value);
    console.log(event.target.value);
  }

  const handleApiPage = (nextOrBack) => {
    console.log(nextFetch);
    if (nextOrBack == "next") {
      setNextEndpointUrl(nextFetch);
    } else if (nextOrBack == "back") {
      setNextEndpointUrl(backFetch);
    }
  };

  const filteredChar = Characters.filter((character) => {
    return character.name.toUpperCase().includes(searchText.toUpperCase());
  });
  console.log(Characters);
  useEffect(() => {
    fetchApi();
  }, [nxtEndpointUrl]);

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.grow}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={(event) => {
              handleSearchInputChange(event);
              props.handleSearch(() => filteredChar);
            }}
          />
        </div>
        <div>
          <IconButton aria-label="" color="inherit">
            <NotificationsIcon />
          </IconButton>
        </div>
        <div className={classes.logi}>
          <img className={classes.title} src={RnMLogo} alt="" />
        </div>

        {/* Material-UI
          </Typography> */}
        {/* <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography> */}
      </Toolbar>
    </AppBar>

    /* <Grid item xs={1}>
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
      </Grid> */
    // <Grid item xs={10}>
    //   <Grid container justify="center" alignItems="center">
    // {characters.length !== 0 ? (
    //   filteredChar.map((character) => {
    //     return <ShowCharc currentCharacter={character} />;
    //   })
    // ) : (
    // <Backdrop open={true}>
    //   <CircularProgress color="inherit" />
    // </Backdrop>
    // )}
    //   </Grid>
    // </Grid>
    /* <Grid item xs={1}>
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
      </Grid> */
  );
}

export default SayHi;
