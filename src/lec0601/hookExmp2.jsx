import { useState } from "react";

function StateExample2(){
    const [name, setNmae]=useState("Pooja");
    return(
        <div>
            <h1>{name}</h1>
        <div>
            <input type="text"
            value={name}
            onChange={(e)=>setNmae(e.target.value)} />
        </div>
        </div>
    )
}
export default StateExample2;