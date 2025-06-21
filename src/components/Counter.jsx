import React, {useState} from 'react';

export default function Counter() {
  const [count,setCount] = useState(0);

  const handleCounter = () => {
    setCount(count + 1);
  }

  return (
      <div className="counter">
        <span className="number">{count}</span>
        <button onClick={handleCounter} className="button">Add +</button>
      </div>
  );
}
