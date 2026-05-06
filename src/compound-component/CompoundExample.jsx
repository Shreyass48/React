import Tab from "./Tab";

const CompoundExample = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Compound Component Pattern Example</h1>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Multiple components working together to share implicit state
      </p>

      <Tab defaultActive={0}>
        <Tab.TabList>
          <Tab.TabButton index={0}>Profile</Tab.TabButton>
          <Tab.TabButton index={1}>Settings</Tab.TabButton>
          <Tab.TabButton index={2}>Notifications</Tab.TabButton>
        </Tab.TabList>

        <Tab.TabPanels>
          <Tab.TabPanel index={0}>
            <h2>Profile Information</h2>
            <p>View and edit your profile details here.</p>
            <div
              style={{
                padding: "15px",
                background: "#f0f8ff",
                borderRadius: "5px",
                marginTop: "15px",
              }}
            >
              <strong>Name:</strong> John Doe
              <br />
              <strong>Email:</strong> john@example.com
              <br />
              <strong>Role:</strong> Developer
            </div>
          </Tab.TabPanel>

          <Tab.TabPanel index={1}>
            <h2>Settings</h2>
            <p>Configure your application preferences.</p>
            <div style={{ marginTop: "15px" }}>
              <label style={{ display: "block", marginBottom: "10px" }}>
                <input type="checkbox" /> Enable dark mode
              </label>
              <label style={{ display: "block", marginBottom: "10px" }}>
                <input type="checkbox" /> Email notifications
              </label>
              <label style={{ display: "block", marginBottom: "10px" }}>
                <input type="checkbox" /> Two-factor authentication
              </label>
            </div>
          </Tab.TabPanel>

          <Tab.TabPanel index={2}>
            <h2>Notifications</h2>
            <p>Manage your notification preferences.</p>
            <div
              style={{
                padding: "15px",
                background: "#fff3cd",
                borderRadius: "5px",
                marginTop: "15px",
              }}
            >
              📬 You have 3 unread notifications
              <br />
              🔔 2 new messages
              <br />
              ⚠️ 1 security alert
            </div>
          </Tab.TabPanel>
        </Tab.TabPanels>
      </Tab>

      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          background: "#f9f9f9",
          borderRadius: "8px",
        }}
      >
        <h3>Benefits of Compound Component Pattern:</h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <strong>Flexible API:</strong> Users can arrange sub-components as
            needed
          </li>
          <li>
            <strong>Implicit State Sharing:</strong> No need to pass props
            manually
          </li>
          <li>
            <strong>Better Composition:</strong> Easy to customize and extend
          </li>
          <li>
            <strong>Clean Syntax:</strong> Intuitive component structure
          </li>
          <li>
            <strong>Separation of Concerns:</strong> Each sub-component has a
            single responsibility
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompoundExample;
