import "./3.css"
import { useState } from "react"

function Third(){
    let [age , setAge] = useState(0)

    function incAge(){
        let newAge = age + 1;

        setAge(newAge);
    }

    return(
        <div>
            <h1>Age is: {age}</h1>
            <button onClick={incAge}>Improve Age</button>
            <hr />
        </div>
    )
}

export default Third;