import { useState } from "react";

function Ninth() {
    let user = { name: "John", age: 25 };

    let [ userDetails ] = useState(user);

    return (
        <div>
            {Object.keys(userDetails).map(key => (
                <p key={key}>{key}: {userDetails[key]}</p>
            ))}

            <hr />
        </div>
    );
}

export default Ninth;