import React from 'react'
import D from './D'

function C({info}) {
  return (
    <div style={{width:"400", margin:"20px auto",textAlign:"center", padding:"20px", boxShadow:"0 0 10px purple"}}>
        <h1>C component</h1>
        
        <D  data={info}/>
    </div>
  )
}

export default C