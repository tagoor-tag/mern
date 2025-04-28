import React,{ useState } from 'react';
import TextComp from './TextComp';

function Button() {
    let [data, setData] = useState("dummy data")

    let updateData = ()=>{
        setData("Updated Data")
    }
  return (
    <div style={{marginTop: "50", textAlign:"center"}}>
        <h1>button Container</h1>
        <button onClick={updateData}>Buttion</button>
        <br /><br />
        <hr />
        <br />
        <TextComp  value={data} />
    </div>
  )
}

export default Button