import { useState } from "react";

function StateExample2(){
    const [name, setNmae]=useState("Pooja");
    const [age, setAge]=useState(25);
    return(
        <div>
            <h1>{name}</h1>
        <div>
            <input type="text"
            value={name}
            onChange={(e)=>setNmae(e.target.value)} />
            <br /><br /><br />
            <h1>{age}</h1>
            <input type=""
            value={age}
            onChange={(e)=>setAge(e.target.value)} />
            
        </div>
        </div>
    )
}
export default StateExample2;