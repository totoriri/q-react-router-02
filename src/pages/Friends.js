import React from 'react'
import FriendList from "../components/FriendList"
import { Route } from "react-router-dom"

const Friends = () => {
  return (
    <div>
      <h2>Friends</h2>
      <Route path="/Friends" component={FriendList} />
    </div>
  )
}

export default Friends
