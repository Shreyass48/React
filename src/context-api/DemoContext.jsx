import { createContext, useContext } from "react";

// step 1: create context
export const DemoContext = createContext();

// step 2: create provider component with state
export const DemoProvider = ({ children }) => {
  const value = {
    name: "ABC DEF",
    email: "abc@gmail.com",
  };

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
};

// step 2b: create consumer
export const DemoConsumer = DemoContext.Consumer;

// step 3 in main.jsx: wrap the app with provider

// step 4: create custom hook for consuming context
export const useDemoContext = () => {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error("useDemoContext must be used within a DemoProvider");
  }
  return context;
};

// step 5 in Home.jsx: consume context using custom hook
