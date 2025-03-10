import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import ReducerExmp from "./lec2001/reducerexmp";
import ReducerDependency from "./lec1003/reducerexmp2";
createRoot(document.getElementById("root")).render(
  <StrictMode>    
    <ReducerDependency/>
      </StrictMode>
);