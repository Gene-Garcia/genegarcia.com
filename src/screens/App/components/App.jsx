import React from "react";

// Routers
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import AppBar from "./AppBar";

// MUI
import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";

// Route
import Routes from "../route";

// Styling
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196F3",
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
    h1: {
      fontFamily: "Source Sans Pro, sans-serif",
      fontWeight: 600,
      fontSize: "38px",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
}));

function App() {
  // Styles
  const classess = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar />

        <Container className={classess.root}>
          <Switch>{RouteHandler()}</Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

function RouteHandler() {
  let handlers = [];

  for (const [k, v] of Object.entries(Routes)) {
    handlers.push(<Route {...v} key={k} />);
  }
  console.log(handlers);
  return handlers;
}

export default App;
