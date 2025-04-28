import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLoggedUser } from '../../services/apiCalls/user'
// import { LoggedIn } from '../../redux/action-creater/LoginAction'
import mystore from "../../redux/store/store"
import { userActionCreator } from "../../redux/ActionCreater/userActionCreater"

function ProtectedRoute({ children }) {
  const navigate = useNavigate()

  useEffect(() => {

    if (localStorage.getItem("Token")) {
      const user = getLoggedUser()
      user.then((res) => {

        // console.log(res)
        // const userDetails = res.data.results

        // const loginUser =  LoggedIn(userDetails)
        mystore.dispatch(userActionCreator(res.data.results.data))

        // mystore.dispatch(LoggedIn(res.data.results.data))



      }
      ).catch((error) => { console.log(error) })
    } else {
      navigate('/')
    }
  })



  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute