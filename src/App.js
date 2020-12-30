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
      </Switch>
    </Router>
  );
}

export default App;


const FRIENDS = [
  {
    id: 'serval',
    nameJa: 'サーバル',
    nameEn: 'Serval Cat',
    family: 'ネコ目ネコ科ネコ属'
  },
  {
    id: 'raccoon',
    nameJa: 'アライグマ',
    nameEn: 'Common raccoon',
    family: 'ネコ目アライグマ科アライグマ属'
  },
  {
    id: 'fennec',
    nameJa: 'フェネック',
    nameEn: 'Fennec',
    family: 'ネコ目イヌ科キツネ属'
  }
]

const friendById = (id) => FRIENDS.find(friend=> friend.id === id)

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
      {/* localhost:3000/friendsにアクセスした場合は、<FriendList>を表示し、さらにその後ろにキャラクターのidをつけた場合、対応するキャラクターのページを表示するようにしている。 */}
        <Route exact path="/friends" component={FriendsList}/>
    </div>
  )
}


const FriendsList = () => {
  return (
    <div>
      {
        FRIENDS.map(friend => (
          <li key={friend.id}>
            <Link to={`/friends/${friend.id}`}>{friend.nameJa}</Link>
          </li>
        ))
      }
    </div>
  )
}