import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h3>Counter: {count} </h3>
      <button onClick={handleIncrease}>Add</button>
    </div>
  );
}
