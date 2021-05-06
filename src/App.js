import "./App.css";
import FetchChar from "./components/FetchChar.js";
import SearchBar from "./components/SearchBar.js";
import Fab from "@material-ui/core/Fab";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Heading from "./components/Heading.js";
// import backImage from "src/812062.png";
import { makeStyles } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// import { theme } from "./components/CssClassi.js";

const theme = createMuiTheme({
  palette: {
    background: {
      paper: "#00ff00",
      default: "#ff0000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <p>Welcome</p>
        <FetchChar />
      </div>
    </ThemeProvider>
  );
}

export default App;
