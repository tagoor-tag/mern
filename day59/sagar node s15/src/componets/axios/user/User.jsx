import React from 'react'
import "./User.css"
import StaticConent from "../static-condent/StaticConent";
import Gender from "../gender/Gender"
import Users from '../users/Users';

function User() {
  return (
    <div>
      <StaticConent/>
      <Gender/>
      <Users/>
    </div>
  )
}

export default User