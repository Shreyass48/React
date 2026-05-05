import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   {/* CONTEXT API DEMO
  //   step 3: wrap the app with provider
  //   */}
  //   <DemoProvider>
  //     <App />
  //   </DemoProvider>
  // </StrictMode>

  <StrictMode>
    {/* redux DEMO
    Step 2: Wrap the app with the Provider component from react-redux and pass the store as a prop
    */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
