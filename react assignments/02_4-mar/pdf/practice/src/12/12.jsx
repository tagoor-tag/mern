import { useState } from "react";

function Assign2(){
    let [count , setCount] = useState(0);

    return(
        <div>
            <h1>Count : {count} </h1>

            <button onClick={()=>{ setCount ( count + 1 )}}>Increment</button>
            <button onClick={()=>{ setCount( count == 0  ? 0 : count -1 )}}>Decrement</button>
            <hr />
        </div>
    )
}

export default Assign2;