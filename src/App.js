import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Player from "./pages/Player/Player"
import GlobalStyle from "./GlobalStyles";

const App = () => {

  return (
    <Router>
      <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Player} />
          {/* <Route path="/services" component={Services} /> */}
        </Switch>
    </Router>
  )
}

export default App;