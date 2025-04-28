import { useState } from "react";
import "./7.css"

function Seven() {
    let allFruits = ['Apple', 'Banana', 'Mango'];
    
    let [fruits, setFruits] = useState(allFruits);

    function addFruits() {
        let newFruits = [...fruits]; // Create a shallow copy of the array
        newFruits.push("Orange");    // Now push the new item to the copy
        setFruits(newFruits);        // Update the state with the new array
    }

    return (
        <div className="seventh">
            <h1>Fruits</h1>
            <ol>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ol>

            <button onClick={addFruits}>Add new</button>
            <hr />
        </div>
    );
}

export default Seven;