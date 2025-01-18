import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ApiSimulatoin from './lec1801/hookuseeffect';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiSimulatoin/>
  </StrictMode>
);