import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
import { BrowserRouter } from "react-router-dom";

root.render(
  <StrictMode>
    <BrowserRouter basename="/portfolio-Jai-Mehta">
      <App />
    </BrowserRouter>
  </StrictMode>
);
