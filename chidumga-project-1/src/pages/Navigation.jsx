import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ exercises }) => {
  return (
    <div className="navigation">
      <Link to="/">Home</Link>
      {exercises.map((exercise) => (
        <Link key={`navigation-${exercise.url}`} to={exercise.url}>
          {exercise.title}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
