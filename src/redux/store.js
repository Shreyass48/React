import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./feature/counter/counterSlice";

// Step 1 : Create a store using configureStore from Redux Toolkit
export const store = configureStore({
  reducer: {
    // Step 4: Add reducers for different slices (see counterSlice.jsx)
    counter: counterSlice,
  },
});

// Step 2: Wrap the app with the Provider component from react-redux and pass the store as a prop (see main.jsx)

// Step 3: Create slices for different features (see counterSlice.jsx)
