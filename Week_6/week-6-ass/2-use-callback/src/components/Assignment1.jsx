import { useState, useCallback } from "react";

export function Assignment1() {
  const [count, setCount] = useState(0);

  // Your code starts here
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
    console.log("1");
  }, [count]);

  const handleDecrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
    console.log("2");
  }, [count]);
  // Your code ends here

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

const CounterButtons = ({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
);
