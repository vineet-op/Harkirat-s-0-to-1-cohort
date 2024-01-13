import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const refElement = useRef();

  useEffect(() => {
    refElement.current.focus();
    console.log("Focus on UseEffect");
  }, []);

  const handleButtonClick = () => {
    refElement.current.focus();
    console.log("Focus on Button Click");
  };

  return (
    <div>
      <input ref={refElement} type="text" placeholder="Enter text here" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
