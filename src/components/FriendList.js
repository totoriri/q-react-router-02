import React from 'react'
import { Route, Link } from "react-router-dom"
import {FRIENDS} from "../App"

const FriendList = () => {
  return (
    <div>
      {FRIENDS.map(friend => (
        <li key={friend.id}>
        <Link to={`/friends/${friend.id}`}>{friend.nameJa}</Link>
        </li>
      ))}
    </div>
  )
}

export default FriendList
