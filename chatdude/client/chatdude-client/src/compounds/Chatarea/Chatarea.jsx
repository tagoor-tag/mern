import React from 'react'
import "./Chatarea.css"

function Chatarea() {
  return (
    <div id='chat-area'>
      <div className="chat-area-details">
        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" width={50} height={50} />
        <h4>Name</h4>
        <i class="bi bi-camera-video-fill"></i>
        <i class="bi bi-telephone-fill"></i>
        <i class="bi bi-three-dots-vertical"></i>
      </div>  

      <div className="chat-area-messages">
      chat-area-messages
      </div>


      <div className="chat-area-text">
      <i class="bi bi-plus-lg"></i>
      <i class="bi bi-file-earmark-fill"></i>
      <input type="text" placeholder='Type Message' />
      <i class="bi bi-send-fill"></i>
      </div>
      
    </div>
  )
}

export default Chatarea