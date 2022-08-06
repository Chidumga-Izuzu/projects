import React from "react";

const ExerciseOne = () => {
  return (
    <div className="exercise-one">
      <h1>Exercise 1</h1>
      <h2>Explore the code of this project</h2>
      <p>
        When looking at any project, it's important to take a moment to look
        around and understand how everything is structured. We will cover more
        of these concepts as we go on, but it is good to have a decent
        understanding of how a project is set up.
      </p>
      <ol>
        <li>
          Start by exploring main.jsx. This is the first code that is run in the
          browser and it mounts the application to the{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
            target="_blank"
          >
            DOM
          </a>
          .
        </li>
        <li>
          Continue by exploring App.jsx. This is the code which contains the{" "}
          <a href="https://github.com/remix-run/react-router" target="_blank">
            React Router
          </a>{" "}
          that handles URL parsing and routing.
        </li>
        <li>
          Take a look at App.css. Notice how it is imported into the application
          in App.jsx.
        </li>
        <li>
          Try changing some of the text in Exercise1.jsx. Notice how the browser
          will automatically reload to show your changes.
        </li>
      </ol>
    </div>
  );
};

export default ExerciseOne;
