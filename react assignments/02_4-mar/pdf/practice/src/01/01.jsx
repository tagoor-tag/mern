import { useState } from "react";
import "./01.css"

function Frist(){
    let [state , setState ] = useState(0);
    function increment(){
        let s = state;
        s++;
        setState(s)
    }
    return(
        <div>
        <h1>count is: {state}</h1>
        <button onClick={increment}>click to increment</button>
        <hr />
        </div>
    )

}

export default Frist;