import React from 'react'
import FriendList from "../components/FriendList"
import {Route} from "react-router-dom"

const Friend = () => {
  return (
    <div>
      <h2>Friends</h2>
      <Route path="/Friend" component={FriendList}/>
    </div>
  )
}

export default Friend
