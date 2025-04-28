import { useState } from "react";

function Assign1(){
    const [name, setname] = useState("");  

    function handleInputChange(event) {
        setname(event.target.value); 
    }

    function updateInput() {
        alert(`Email Id: ${name}`);  
    
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}          // Bind input value to state
                onChange={handleInputChange} // Handle change to update state
                id="email"
            />
            <br />
            <button onClick={updateInput}>Submit</button>
            <p>Email Id: {name}</p>
            <hr />
        </div>
    );
}

export default Assign1;