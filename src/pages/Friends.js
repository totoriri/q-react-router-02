import React from 'react'
import FriendList from "../components/FriendList"
import { Route } from "react-router-dom"
import Friend from "../components/Friend"

const Friends = () => {
  return (
    <div>
      <h2>Friends</h2>
      <Route path="/friends" component={FriendList} />
      {/* ここだと、App.jsに記載した時同様にうまく表示されない。なぜか。 */}
      {/* <Route path='/friends/:id' component={Friend} /> */}
    </div>
  )
}

export default Friends
