/**
 * Controlled Component Pattern
 *
 * Definition: Component where form data is handled by React state
 * Purpose: React controls the state and updates on every change
 */

import { useState } from "react";

// Step 1: Create a controlled component
const ControlledForm = () => {
  // Step 2: Create state for each input field
  // React state controls the value of each input
  const [formData, setFormData] = useState({
    name: "Jane Smith",
    email: "jane@example.com",
    message: "Hi there!",
  });

  // Step 3: Optional - Track if form is touched for validation
  const [touched, setTouched] = useState({});

  // Step 4: Handle input changes
  // This runs on every keystroke, updating React state
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the specific field in state
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Step 5: Handle field blur for validation
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  // Step 6: Simple validation
  const getError = (field) => {
    if (!touched[field]) return null;

    if (!formData[field]) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }

    if (field === "email" && !formData[field].includes("@")) {
      return "Invalid email format";
    }

    return null;
  };

  // Step 7: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // In controlled components, state is always in sync with inputs
    console.log("Controlled Form Data:", formData);
    alert(
      `Submitted (Controlled):\nName: ${formData.name}\nEmail: ${formData.email}`,
    );

    // Step 8: Reset by updating state
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setTouched({});
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #4ecdc4",
        borderRadius: "8px",
        backgroundColor: "#f0ffff",
      }}
    >
      <h3 style={{ color: "#4ecdc4", marginTop: 0 }}>
        🟢 Controlled Component
      </h3>
      <p style={{ color: "#666", fontSize: "14px" }}>
        React state controls the form. Updates on every change.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Step 9: Use value + onChange for controlled inputs */}
        {/* value prop = controlled */}
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
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: getError("name") ? "2px solid red" : "1px solid #ddd",
            }}
          />
          {getError("name") && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {getError("name")}
            </span>
          )}
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: getError("email") ? "2px solid red" : "1px solid #ddd",
            }}
          />
          {getError("email") && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {getError("email")}
            </span>
          )}
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
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your message"
            rows="3"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: getError("message") ? "2px solid red" : "1px solid #ddd",
              resize: "vertical",
            }}
          />
          {getError("message") && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {getError("message")}
            </span>
          )}
        </div>

        {/* Step 10: Display current character count (live feedback) */}
        <div
          style={{
            marginBottom: "15px",
            fontSize: "13px",
            color: "#666",
          }}
        >
          Message length: {formData.message.length} characters
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4ecdc4",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Submit Controlled Form
        </button>
      </form>

      {/* Step 11: Key characteristics */}
      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#e0f7f7",
          borderRadius: "4px",
          fontSize: "13px",
        }}
      >
        <strong>Characteristics:</strong>
        <ul style={{ margin: "5px 0", paddingLeft: "20px" }}>
          <li>
            Uses <code>value</code> + <code>onChange</code>
          </li>
          <li>React state is the source of truth</li>
          <li>Enables real-time validation</li>
          <li>More re-renders but more control</li>
        </ul>
      </div>
    </div>
  );
};

export default ControlledForm;
