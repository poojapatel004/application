import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import Apisimulator from "./lec1801/hookuseeffect";
import UserComp1 from './lec2101/customcomp';
createRoot(document.getElementById("root")).render(
  <StrictMode>    
   <UserComp1/>
  </StrictMode>
);