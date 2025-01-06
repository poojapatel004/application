import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StateExample2 from './lec0601/hookExmp2';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateExample2/>
  </StrictMode>
);