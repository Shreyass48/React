import React from "react";

export default function UserProfile({ userData }) {
  return (
    <div>
      <p className="p-1">{userData.name}</p>
    </div>
  );
}
