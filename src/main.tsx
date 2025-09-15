import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("Starting React app...");
const rootElement = document.getElementById("root");
console.log("Root element:", rootElement);

if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found!");
}
