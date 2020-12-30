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
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/friends/:id" component={Friend}/>
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
      <Route exact path="/friends" component={FriendsList} />
      <Route exact path="/friends/:id" component={Friend}/>
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

const Friend = props => {
  const { id } = props.match.params
  const friend = friendById(id)

  if (typeof friend === 'undefined')  {
    return (
      <div>
        <p>Friends with id '{id}' does not exist.</p>
      </div>
    )
  }


  const containerStyle = { border: '1px gray solid', display: 'inline-block', padding: 10 }
  const contentsStyle = { margin: 0 }

  return (
    <div>
      <div style={containerStyle}>
        <p style={contentsStyle}>{friend.family}</p>
        <h1 style={contentsStyle}>{friend.nameJa}</h1>
        <p style={contentsStyle}>{friend.nameEn}</p>
      </div>
    </div>
  )
}