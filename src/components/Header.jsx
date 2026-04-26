import React from "react";
import UserProfile from "./UserProfile";

export default function Header({ userData }) {
  const navItems = ["Home", "About", "Contact"];
  return (
    <div className="bg-amber-50">
      <UserProfile userData={userData} />
      <nav>
        <ul className="flex gap-4  justify-end px-10 py-2">
          {navItems.map((item) => (
            <li className="cursor-pointer" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
