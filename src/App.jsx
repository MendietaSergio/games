import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Asked } from "./Pages/Asked";
import { Home } from "./Pages/Home";
import { Memo } from "./Pages/Memo";
import { StonePaperScissors } from "./Pages/StonePaperScissors";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/asked" element={<Asked />} />
          <Route exact path="/memo" element={<Memo />} />
          <Route
            exact
            path="/stonepaperscissors"
            element={<StonePaperScissors />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
