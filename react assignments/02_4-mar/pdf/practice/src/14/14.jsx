import { useState } from "react";

function Assign4(){
    let user = { name: "John", age: 25 , city: "hyderabad" };

    let [person , setUser] = useState(user);

    function changeDetails(){

        let newPerson = { name: "Tagoor" , age: 21 , city: "Madhira"}

        setUser(newPerson);

    }
    
    return (
        <div>
            {Object.keys(person).map(key => (
                <p key={key}>{key}: {person[key]}</p>
            ))}

            <button onClick={changeDetails}>Update Profile</button>

            <hr />
        </div>
    );

}

export default Assign4;