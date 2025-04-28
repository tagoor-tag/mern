import React, { useState } from "react";
import "./4.css";

function Fourth() {
    const [email, setEmail] = useState("");  

    function handleInputChange(event) {
        setEmail(event.target.value); 
    }

    function updateInput() {
        alert(`Email Id: ${email}`);  
    
    }

    return (
        <div>
            <input
                type="email"
                placeholder="Enter your Email"
                value={email}          // Bind input value to state
                onChange={handleInputChange} // Handle change to update state
                id="email"
            />
            <br />
            <button onClick={updateInput}>Submit</button>
            <p>Email Id: {email}</p>
            <hr />
        </div>
    );
}

export default Fourth;
