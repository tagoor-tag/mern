import { useState } from "react";
import "./6.css"

function Sixth(){

    let allFruits = ['Apple', 'Banana', 'Mango']
    
    let [fruits ] = useState(allFruits)

    return(
        <div className="sixth">
            <h1>Fruits</h1>
            <ol>
                <li> {fruits[0]} </li>
                <li> {fruits[1]} </li>
                <li> {fruits[2]} </li>
            </ol>
            <hr />
        </div>
    )
}

export default Sixth;