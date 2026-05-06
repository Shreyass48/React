/**
 * Uncontrolled Component Pattern
 *
 * Definition: Component where form data is handled by the DOM itself
 * Purpose: Let the DOM handle the state, access values using refs
 */

import { useRef } from "react";

// Step 1: Create an uncontrolled component
const UncontrolledForm = () => {
  // Step 2: Create refs to access DOM elements directly
  // Refs provide a way to access DOM nodes without controlling their state
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Step 4: Access values from DOM using refs
    // The DOM maintains the state, we just read it when needed
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    console.log("Uncontrolled Form Data:", formData);
    alert(
      `Submitted (Uncontrolled):\nName: ${formData.name}\nEmail: ${formData.email}`,
    );

    // Step 5: Optional - Reset form manually
    e.target.reset();
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #ff6b6b",
        borderRadius: "8px",
        backgroundColor: "#fff5f5",
      }}
    >
      <h3 style={{ color: "#ff6b6b", marginTop: 0 }}>
        🔴 Uncontrolled Component
      </h3>
      <p style={{ color: "#666", fontSize: "14px" }}>
        DOM handles the state. React accesses values via refs when needed.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Step 6: Use ref attribute instead of value + onChange */}
        {/* No value prop = uncontrolled */}
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Name:
          </label>
          <input
            type="text"
            ref={nameRef}
            defaultValue="John Doe"
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ddd",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Email:
          </label>
          <input
            type="email"
            ref={emailRef}
            defaultValue="john@example.com"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ddd",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Message:
          </label>
          <textarea
            ref={messageRef}
            defaultValue="Hello!"
            placeholder="Enter your message"
            rows="3"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ddd",
              resize: "vertical",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#ff6b6b",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Submit Uncontrolled Form
        </button>
      </form>

      {/* Step 7: Key characteristics */}
      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#ffe0e0",
          borderRadius: "4px",
          fontSize: "13px",
        }}
      >
        <strong>Characteristics:</strong>
        <ul style={{ margin: "5px 0", paddingLeft: "20px" }}>
          <li>
            Uses <code>ref</code> to access values
          </li>
          <li>
            Uses <code>defaultValue</code> for initial state
          </li>
          <li>DOM maintains the state</li>
          <li>Less re-renders</li>
        </ul>
      </div>
    </div>
  );
};

export default UncontrolledForm;
