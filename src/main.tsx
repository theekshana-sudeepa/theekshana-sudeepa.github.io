import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import Portfolio from "./Portfolio";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to locate #root container element.");
}

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
