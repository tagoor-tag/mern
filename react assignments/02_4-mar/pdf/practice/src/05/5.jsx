import { useState } from "react";
import "./5.css";

function Fivth(){

    let [count, setCount] = useState(0);

    

    return(
        <div>
            <h1>Count is : {count}</h1>
            <button onClick={()=>{ setCount (count + 1)}}>increment</button>
            <button onClick={()=>{ setCount (0)}}>Reset</button>
            <hr />

        </div>
    )
}

export default Fivth;