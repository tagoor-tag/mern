import { useState } from "react";
import "./8.css"

function Eighth(){
    let allFruits = ['Apple', 'Banana', 'Mango'];
    
    let [fruits, setFruits] = useState(allFruits);
    
    let newFruits = [...fruits]; // Create a shallow copy of the array
    
    function addFruits() {
        newFruits.push("Orange");    // Now push the new item to the copy
        setFruits(newFruits);        // Update the state with the new array
    }

    function removeFruits(){
        newFruits.pop();
        setFruits(newFruits)

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
            <button onClick={removeFruits}>Remove</button>
            <hr />
        </div>
    );
}

export default Eighth;