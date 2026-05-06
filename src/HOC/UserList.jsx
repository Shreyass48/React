// Step 1: Create a basic component that displays user data
const UserList = ({ users }) => {
  // Step 2: Render the list of users
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "15px" }}>User List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              padding: "10px",
              margin: "5px 0",
              background: "#f0f0f0",
              borderRadius: "5px",
            }}
          >
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
