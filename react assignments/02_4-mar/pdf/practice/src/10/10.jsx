import { useState } from "react";

function Tenth(){
    let user = { name: "John", age: 25 };

    let [ userDetails , setUser] = useState(user);

    function incAge() {
        setUser({ ...userDetails, age: userDetails.age + 1 });
    }

    function chaName() {
        setUser({ ...userDetails, name: "Tagoor" });
    }



    return (
        <div>
            {Object.keys(userDetails).map(key => (
                <p key={key}>{key}: {userDetails[key]}</p>
            ))}


            <button onClick={incAge}>Increase Age</button>
            <button onClick={chaName}> Change Name</button>
            <hr />
        </div>
    );
}

export default Tenth;
