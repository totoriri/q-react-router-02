import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Friend from "./pages/Friend"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Friend" component={Friend}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
