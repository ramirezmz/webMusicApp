import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Player from "./pages/Player/Player"

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Player} />
        {/* <Route path="/services" component={Services} /> */}
      </Switch>
    </Router>
  )
}

export default App;