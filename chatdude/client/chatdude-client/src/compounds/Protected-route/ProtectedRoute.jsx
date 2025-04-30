import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLoggedUser , getAllChatList } from '../../services/apiCalls/user'
import mystore from "../../redux/store/store"
import { userActionCreator, chatListActionCreater } from '../../redux/ActionCreater/userActionCreater'

function ProtectedRoute({ children }) {
  const navigate = useNavigate()

  useEffect(() => {

    if (localStorage.getItem("Token")) {
      const user = getLoggedUser()
      user.then((res) => {
        mystore.dispatch(userActionCreator(res.data.results.data , "LoginUser"))
      }
      ).catch((error) => { console.log(error) })

      const allChatList = getAllChatList()

      allChatList.then((res)=>{
        mystore.dispatch(chatListActionCreater(res.data.getUsers, "ChatList"))

      }).catch((error)=>{
        console.log(error)
      })

    } else {
      navigate('/')
    }
  })



  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute