import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import Apisimulator from "./lec1801/hookuseeffect";
import ImageChanger from './lec2001/useeffect';
createRoot(document.getElementById("root")).render(
  <StrictMode>    
   <ImageChanger/>
  </StrictMode>
);