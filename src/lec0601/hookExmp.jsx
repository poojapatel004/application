import { useState } from "react";

function StateExample(){
    const [name]=useState("Pooja");
    return <div><h1>{name}</h1></div>
}
export default StateExample;

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import StateExample from './lec0601/hookExmp';


// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <StateExample/>
//   </StrictMode>
// );