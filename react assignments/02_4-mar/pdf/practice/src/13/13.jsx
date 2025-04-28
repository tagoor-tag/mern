import React , { useState } from "react";

function Assign3(){

    let allFruits = ['Apple', 'Banana', 'Mango'];
    
    let [fruits, setFruits] = useState(allFruits);

    function addFruits() {
        let newFruits = ['Pineapple', 'Grapes', 'Peach'] ; 
           
        setFruits(newFruits);        
    }

    return(
        <div>
            <h1>Fruits</h1>
            
                {fruits.map((fruit, index) => (
                    <p key={index}>{fruit}</p>
                ))}
            
            <button onClick={addFruits}>New Fruits List</button>
            <hr />
        </div>
    )

}

export default Assign3;