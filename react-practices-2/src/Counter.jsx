import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const counting = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div
      style={{
        margin: '10px 0',
        background: 'green',
        borderRadius: '10px',
        padding: '10px',
      }}
    >
      <h2>Counter: {count}</h2>
      <button onClick={counting}>CLick me</button>
    </div>
  );
}

export default Counter;
