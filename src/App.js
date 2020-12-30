import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Friends from "./pages/Friends"

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/friends">Friends</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/friends" component={Friends}/>
        {/* <Route exact path="/" component={}/>
        <Route exact path="/" component={}/> */}
      </Switch>
    </Router>
  );
}

export default App;

export const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p></p>
    </div>
  )
}

export const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p></p>
    </div>
  )
}

export const Friends = () => {
  return (
    <div>
      <h1>Friend Page</h1>
      <p></p>
    </div>
  )
}
