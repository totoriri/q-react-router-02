import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Friend from "./pages/Friend"

export const FRIENDS = [
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

// findメソッドで、配列内において条件に合致した一番最初の要素を返している。
// つまり、idをもとにリストから対応するキャラクターのオブジェクトを探すfriendByIdという関数を定義しただけ。
export const friendById = id => FRIENDS.find(friend => friend.id === id)

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Friend">Friend</Link></li>
          </ul>
        </nav>

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
