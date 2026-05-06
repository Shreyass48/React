/**
 * Compound Component Pattern Example
 *
 * Definition: Multiple components that work together to share an implicit state
 * Purpose: Create flexible, customizable components that manage shared state
 */

import { createContext, useContext, useState } from "react";

// Step 1: Create a Context to share state between compound components
const TabContext = createContext();

// Step 2: Create the main parent component (Tab)
// This component manages the shared state and provides it to children
const Tab = ({ children, defaultActive = 0 }) => {
  // Step 3: Set up state for tracking active tab
  const [activeTab, setActiveTab] = useState(defaultActive);

  // Step 4: Provide state and setter to all child components via Context
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        {children}
      </div>
    </TabContext.Provider>
  );
};

// Step 5: Create TabList sub-component (compound component)
// This component renders the tab buttons
Tab.TabList = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        borderBottom: "2px solid #ddd",
        backgroundColor: "#f5f5f5",
      }}
    >
      {children}
    </div>
  );
};

// Step 6: Create TabButton sub-component (compound component)
// This component accesses shared state from context
Tab.TabButton = ({ index, children }) => {
  // Step 7: Access shared state using useContext hook
  const { activeTab, setActiveTab } = useContext(TabContext);

  // Step 8: Check if this tab is currently active
  const isActive = activeTab === index;

  // Step 9: Render button with conditional styling
  return (
    <button
      onClick={() => setActiveTab(index)}
      style={{
        flex: 1,
        padding: "15px 20px",
        border: "none",
        background: isActive ? "#fff" : "#f5f5f5",
        color: isActive ? "#0066cc" : "#666",
        fontWeight: isActive ? "bold" : "normal",
        cursor: "pointer",
        borderBottom: isActive ? "3px solid #0066cc" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </button>
  );
};

// Step 10: Create TabPanels sub-component (compound component)
// This component renders the container for tab content
Tab.TabPanels = ({ children }) => {
  return <div>{children}</div>;
};

// Step 11: Create TabPanel sub-component (compound component)
// This component shows/hides content based on active tab
Tab.TabPanel = ({ index, children }) => {
  // Step 12: Access shared state to determine if this panel should be visible
  const { activeTab } = useContext(TabContext);

  // Step 13: Only render content if this is the active tab
  if (activeTab !== index) {
    return null;
  }

  // Step 14: Render the tab content
  return <div style={{ padding: "20px" }}>{children}</div>;
};

export default Tab;
