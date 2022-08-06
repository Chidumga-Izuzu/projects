import React, { useState } from "react";

const ExerciseTwo = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    // Insert code here...
    // Extra credit: there are two ways to use the setCount function to increment, can you figure out both?
  };

  return (
    <div className="exercise-two">
      <h1>Exercise 2</h1>
      <h2>Click the button to increase the number</h2>
      <div>{count}</div>
      <div>
        <button onClick={handleButtonClick}>Increment</button>
      </div>
    </div>
  );
};

export default ExerciseTwo;
