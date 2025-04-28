import React, { useContext } from 'react'
import firstContext from './context'

// function D({data}) {
  function D() {
  const myData = useContext(firstContext);
  
  return (
    <div style={{width:"250", margin:"20px auto",textAlign:"center", padding:"20px", boxShadow:"0 0 10px green"}}>
        <h1>D component</h1>

        {/* <p style={{color: "green"}}>data : {data}</p> */}
        <p style={{color: "green"}}>data : {myData} </p>

    </div>
  )
}

export default D