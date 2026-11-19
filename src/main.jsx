import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import Portfolio from "./Portfolio.jsx";

const container = document.getElementById("root");
const app = (
  <StrictMode>
    <Portfolio />
  </StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
