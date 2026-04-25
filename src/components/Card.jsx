import React from "react";

export default function Card({ cardData }) {
  return (
    <div className="flex gap-3 m-10">
      {cardData?.map((record) => (
        <div className="border-2 p-4">
          <h1 className="text-2xl font-bold">{record.title}</h1>
          <p>{record.description}</p>
        </div>
      ))}
    </div>
  );
}
