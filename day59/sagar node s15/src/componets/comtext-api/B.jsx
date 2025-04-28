import React from 'react'
import C from './C'

function B({value}) {
  return (
    <div style={{width:"600", margin:"20px auto",textAlign:"center", padding:"20px", boxShadow:"0 0 10px red"}}>
        <h1>B component</h1>

        <C info= {value}/>
    </div>
  )
}

export default B