import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import ReducerExmp from "./lec2001/reducerexmp";
//import ReducerDependency from "./lec1003/reducerexmp2";
import MyFeature from "./8(lec1103)/monolithiccomp";
createRoot(document.getElementById("root")).render(
  <StrictMode>    
    <MyFeature/>
      </StrictMode>
);