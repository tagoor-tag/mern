import { useState } from "react";
import "./02.css";

function Second(){

    let name = useState("John Deo");

    return(
        <div>
            <h1>{name[0]}</h1>
            <hr />
        </div>
    )
}

export default Second;