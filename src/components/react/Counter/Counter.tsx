import { useState } from 'react';

const Counter = () => {
  const [count, setCounter] = useState(0);
  return (
    <button onClick={() => setCounter((number) => number + 1)}>
      Counter: {count}
    </button>
  );
};

export default Counter;