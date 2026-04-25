import React from "react";

export default function Footer({
  companyName = "Company",
  year = new Date().getFullYear(),
  showLinks = true,
  links = [],
  customText = null,
}) {
  return (
    <div>
      {customText ? (
        <div>{customText}</div>
      ) : (
        <div>
          © {year} {companyName}. All rights reserved.
        </div>
      )}

      {showLinks && links.length > 0 && (
        <div>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
              {index < links.length - 1 && " | "}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
