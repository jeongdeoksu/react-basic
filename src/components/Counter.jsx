import React, {useState} from 'react';

export default function Counter({total, onClick}) {
  const [count,setCount] = useState(0);

  const handleCounter = () => {
    setCount((prevCount) => prevCount + 1);
    onClick();
  }

  return (
      <div className="counter">
        <p className="number">{count} <span className='total'>/{total}</span></p>
        <button onClick={handleCounter} className="button">Add +</button>
      </div>
  );
}
