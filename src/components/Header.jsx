import React from "react";

export default function Header() {
  const navItems = ["Home", "About", "Contact"];
  return (
    <div>
      <nav>
        <ul className="flex gap-4 bg-amber-50 justify-end px-10 py-2">
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
