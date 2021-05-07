// import "./App.css";
import FetchChar from "./components/FetchChar.js";
import SearchBar from "./components/SearchBar.js";
import Fab from "@material-ui/core/Fab";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Heading from "./components/Heading.js";
// import backImage from "src/812062.png";
// import { makeStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { theme } from "./components/CssClassi.js";
import { Container } from "@material-ui/core";
// import AppBari, { searchText } from "./components/AppBari.js";
// import Heading from "./components/Heading.js"

const useStyles = makeStyles({
  root: {
    background:
      "radial-gradient(circle, #d977dc, #ff71b8, #ff7992, #ff8d72, #ffa55b, #feaa52, #fcb049, #f9b640, #f6a73d, #f2973c, #ed883b, #e7793c)",
    // "linear-gradient(to right bottom,#e7793c,#ed883b,#f2973c,#f6a73d,#f9b640,#fcb049,#feaa52,#ffa55b, #ff8d72, #ff7992, #ff71b8, #d977dc)",
    margin: "0px",
    padding: "0px",
    width: "100%",
    height: "100%",
  },
});

const theme = createMuiTheme({
  palette: {
    background: {
      default: "transparent ",
      paper: "#00ff00",
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <FetchChar />
      </div>
    </ThemeProvider>
  );
}

export default App;
