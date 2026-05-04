import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DemoProvider } from "./context-api/DemoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* step 3: wrap the app with provider */}
    <DemoProvider>
      <App />
    </DemoProvider>
  </StrictMode>,
);
