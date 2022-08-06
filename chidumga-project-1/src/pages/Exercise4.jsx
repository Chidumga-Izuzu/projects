import React from "react";

const ExerciseFour = () => {
  const key = "bar123";

  return (
    <div className="exercise-four">
      <h1>Exercise 4</h1>
      <h2>Conditional rendering</h2>
      <p>Hide and show items in the list</p>

      <ul>
        {/* Change one token in the line below */}
        {false && <li>Hide me!</li>}

        {/* Change something above */}
        {key === "foo123" && <li>Hide me!</li>}

        {/* Change something above */}
        {key === "bar123" && <li>Show me!</li>}
      </ul>
    </div>
  );
};

export default ExerciseFour;
