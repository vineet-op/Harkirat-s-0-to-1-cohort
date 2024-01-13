import React, { useState, useRef } from "react";

export function Assignment2() {
  const [Count, setCount] = useState(0);

  const renderCount = useRef(0);

  const handleReRender = () => {
    renderCount.current = renderCount.current + 1;
    setCount((prev) => prev + 1);
    console.log("This component has rendered", renderCount.current, "times.");
  };

  return (
    <div>
      <p>This component has rendered {Count} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
