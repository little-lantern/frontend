import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;

const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
