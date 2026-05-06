/**
 * Controlled vs Uncontrolled Components Example
 * Demonstrates the difference between both patterns
 */

import ControlledForm from "./ControlledForm";
import UncontrolledForm from "./UncontrolledForm";

// Step 1: Create the main component that showcases both patterns
const ControlledUncontrolledExample = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Controlled vs Uncontrolled Components</h1>
      <p style={{ color: "#666", marginBottom: "30px", fontSize: "16px" }}>
        Two different approaches to handling form data in React
      </p>

      {/* Step 2: Display both forms side by side */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {/* Controlled component example */}
        <ControlledForm />

        {/* Uncontrolled component example */}
        <UncontrolledForm />
      </div>

      {/* Step 3: Comparison table */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      >
        <h2>Comparison Table</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "15px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#e0e0e0" }}>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "2px solid #ccc",
                }}
              >
                Feature
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "2px solid #ccc",
                }}
              >
                Controlled
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "2px solid #ccc",
                }}
              >
                Uncontrolled
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <strong>State Management</strong>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                React state
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                DOM
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <strong>Value Access</strong>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                value prop + onChange
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                refs
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <strong>Initial Value</strong>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                useState default
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                defaultValue prop
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <strong>Re-renders</strong>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                On every keystroke
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Only on submit
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <strong>Real-time Validation</strong>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                ✅ Easy
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                ❌ Difficult
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <strong>Performance</strong>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                More re-renders
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Better (fewer re-renders)
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <strong>Use Case</strong>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Complex forms with validation
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Simple forms, file uploads
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Step 4: When to use each pattern */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            padding: "20px",
            backgroundColor: "#e0f7f7",
            borderRadius: "8px",
            border: "2px solid #4ecdc4",
          }}
        >
          <h3 style={{ color: "#4ecdc4", marginTop: 0 }}>
            When to Use Controlled
          </h3>
          <ul style={{ lineHeight: "1.8" }}>
            <li>Need real-time validation</li>
            <li>Need to format input as user types</li>
            <li>Conditional disabling of submit button</li>
            <li>Dynamic form fields</li>
            <li>Need to enforce input format</li>
            <li>Instant feedback required</li>
          </ul>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff5f5",
            borderRadius: "8px",
            border: "2px solid #ff6b6b",
          }}
        >
          <h3 style={{ color: "#ff6b6b", marginTop: 0 }}>
            When to Use Uncontrolled
          </h3>
          <ul style={{ lineHeight: "1.8" }}>
            <li>Simple forms with minimal logic</li>
            <li>File input fields (must be uncontrolled)</li>
            <li>Integrating with non-React libraries</li>
            <li>Performance-critical forms</li>
            <li>Quick prototyping</li>
            <li>Legacy code integration</li>
          </ul>
        </div>
      </div>

      {/* Step 5: Best practices */}
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "#fffbeb",
          borderRadius: "8px",
          border: "2px solid #fbbf24",
        }}
      >
        <h3 style={{ marginTop: 0 }}>💡 Best Practices</h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <strong>Prefer Controlled:</strong> React recommends controlled
            components for most use cases
          </li>
          <li>
            <strong>Don't Mix:</strong> Don't mix controlled and uncontrolled in
            the same input
          </li>
          <li>
            <strong>File Inputs:</strong> Always uncontrolled (can't set value
            programmatically)
          </li>
          <li>
            <strong>Form Libraries:</strong> Libraries like Formik, React Hook
            Form handle complexity
          </li>
          <li>
            <strong>Performance:</strong> For large forms, consider uncontrolled
            or form libraries
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ControlledUncontrolledExample;
