import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./pages/ErrorBoundary";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";
import ExerciseOne from "./pages/Exercise1";
import ExerciseTwo from "./pages/Exercise2";
import ExerciseThree from "./pages/Exercise3";
import ExerciseFour from "./pages/Exercise4";
import ExerciseFive from "./pages/Exercise5";

const exercises = [
  {
    title: "Exercise 1 - Exploration",
    element: <ExerciseOne />,
    url: "/exercise-one",
  },
  {
    title: "Exercise 2 - useState",
    element: <ExerciseTwo />,
    url: "/exercise-two",
  },
  {
    title: "Exercise 3 - List Rendering",
    element: <ExerciseThree />,
    url: "/exercise-three",
  },
  {
    title: "Exercise 4 - Conditional Rendering",
    element: <ExerciseFour />,
    url: "/exercise-four",
  },
  {
    title: "Exercise 5 - Remote Data Fetching",
    element: <ExerciseFive />,
    url: "/exercise-five",
  },
];

function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <BrowserRouter>
          <div className="app__left">
            <Navigation exercises={exercises} />
          </div>
          <div className="app__right">
            <Routes>
              <Route exact path="/" element={<Home />} />
              {exercises.map((exercise) => (
                <Route
                  exact
                  path={exercise.url}
                  element={exercise.element}
                  key={`app=route-${exercise.url}`}
                />
              ))}
            </Routes>
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
