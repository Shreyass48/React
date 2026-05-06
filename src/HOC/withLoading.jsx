/**
 * Higher Order Component (HOC) Pattern Example
 *
 * HOC Definition: A function that takes a component and returns a new enhanced component
 * Purpose: Add loading functionality to any component
 */

// Step 1: Define the HOC function that accepts a component as parameter
const withLoading = (WrappedComponent) => {
  // Step 2: Return a new component that enhances the original component
  return function WithLoadingComponent({ isLoading, ...props }) {
    // Step 3: Add the loading logic
    // If isLoading is true, show loading message instead of the wrapped component
    if (isLoading) {
      return (
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            fontSize: "18px",
            color: "#666",
          }}
        >
          Loading...
        </div>
      );
    }

    // Step 4: If not loading, render the original component with all its props
    // The ...props spread operator passes down all props except isLoading
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
