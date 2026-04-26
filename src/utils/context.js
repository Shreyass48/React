import { createContext, useContext } from "react";

export const DashboardContext = createContext(undefined);

// Custom hook to use the DashboardContext
export function useUserContext() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error(
      "useUserContext must be used within a DashboardContext.Provider",
    );
  }
  return context;
}
