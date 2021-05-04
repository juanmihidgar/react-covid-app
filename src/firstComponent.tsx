import React, { useState } from "react";

export const FirstComponent: React.FC = () => {
  const [title] = useState("Hello from React DOM!");

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
