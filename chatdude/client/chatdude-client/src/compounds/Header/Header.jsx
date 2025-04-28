import React, { useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {

  
const user = useSelector((state)=>{
  return state
})

console.log(user)
  
  const navigate = useNavigate();
  return (
    <div id='header-div'>
      <div id="header-logo">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/508/754/small/3d-chat-mail-message-notification-chatting-illustration-png.png" alt="" id='header-logo-img' />
        <h4>ChatDUDE</h4>

      </div>
      <div id="header-profile">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/029/271/062/small/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg" alt="" id='header-profile-img'/>
        <h4>{user.first}</h4>
        <button onClick={()=>{ 
          localStorage.removeItem("Token") 
          navigate('/')}}><i class="bi bi-power"></i></button>
        
      </div>
    </div>
  )
}

export default Header