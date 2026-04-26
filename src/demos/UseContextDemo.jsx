import { useState } from "react";
import Dashboard from "../components/Dashboard";
import { DashboardContext } from "../utils/context";

export default function UseContextDemo() {
  const [user, setUser] = useState({
    isSubscribed: true,
    name: "Praveen",
  });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}
