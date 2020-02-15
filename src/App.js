import React from "react";

// dependencies for routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// dependencies for styled-components global styles
import { ThemeProvider } from "styled-components";
import theme from "./components/global/theme/Theme.config";
import GlobalStyle from "./components/global/theme/Theme.styled";

// components
import RandomBeer from "./components/randomBeer/RandomBeer";
import Brewery from "./components/brewery/Brewery";

// styles
import { AppWrapper } from "./App.styled";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <Router>
          <Switch>
            <Route exact path="/">
              <RandomBeer />
            </Route>
            <Route path="/brewery/:id">
              <Brewery />
            </Route>
          </Switch>
        </Router>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
