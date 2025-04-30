import React from 'react'
import "./Asidelist.css"
import Search from '../SearchItem/Search'
import Chatlist from '../ChatList/Chatlist'
import { useSelector } from 'react-redux'

function Asidelist() {

  let chatuserList = useSelector((state)=>{
    return state.userReducer.chatList
  })
  return (
    <div id='asidelist'>
      <Search/>
      <div id='chat-list-asidelist'>
        {chatuserList.map((element, index)=> {
          return <Chatlist key={index} name={element.firstname +" "+ element.lastname} image={element.image} message={element.email} />
        })}

      </div>

    </div>
  )
}

export default Asidelist