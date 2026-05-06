import { useState, useEffect } from "react";
import UserList from "./UserList";
import withLoading from "./withLoading";

// Step 1: Enhance the UserList component with loading functionality
const UserListWithLoading = withLoading(UserList);

// Step 2: Create the main component that uses the enhanced component
const HOCExample = () => {
  // Step 3: Set up state for loading and data
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  // Step 4: Simulate data fetching
  useEffect(() => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Mock user data
      const mockUsers = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
      ];

      // Update state with fetched data
      setUsers(mockUsers);
      setIsLoading(false);
    }, 2000); // 2 second delay to show loading state
  }, []);

  // Step 5: Render the enhanced component
  // The HOC will handle showing loading or the actual component
  return (
    <div style={{ padding: "20px" }}>
      <h1>Higher Order Component (HOC) Pattern Example</h1>
      <p style={{ color: "#666", marginBottom: "20px" }}>
        The UserList component is wrapped with withLoading HOC to add loading
        functionality
      </p>

      {/* Pass isLoading and users props to the enhanced component */}
      <UserListWithLoading isLoading={isLoading} users={users} />

      {/* 
        Benefits of HOC Pattern:
        - Reusability: The withLoading HOC can be used with any component
        - Separation of Concerns: Loading logic is separate from business logic
        - Component Composition: Easy to combine multiple HOCs
        - No Component Modification: Original UserList remains unchanged
      */}
    </div>
  );
};

export default HOCExample;
