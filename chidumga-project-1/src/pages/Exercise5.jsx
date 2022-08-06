import React, { useEffect, useState } from "react";
import { Prism } from "@mantine/prism";

const ExerciseFive = () => {
  const [data, setData] = useState([]);

  // React 17 version (generates 2 separate API calls in React 18 strict mode)
  // useEffect(() => {
  //   fetch("https://api.sampleapis.com/coffee/hot")
  //     .then((resp) => resp.json())
  //     .then((apiData) => {
  //       setData(apiData);
  //     });
  // }, []);

  // React 18 version
  let alreadyFetched = false;
  useEffect(() => {
    if (!alreadyFetched) {
      fetch("https://api.sampleapis.com/coffee/hot")
        .then((res) => res.json())
        .then((apiData) => {
          setData(apiData);
        });
    }
    return () => {
      alreadyFetched = true;
    };
  }, []);

  const exampleCodeBlock = `useEffect(() => { 
    /* This code runs whenever the dependencies change */
    return () => { /* This code runs when the component unmounts */ }
  }, [dependencies])`;
  const exampleOnMountCodeBlock = `useEffect(() => { 
    /* This code runs whenever the component mounts */
  }, [])`;

  const links = [
    {
      title: "Why useEffect is running twice in React",
      href: "https://www.codingdeft.com/posts/react-use-effect-running-twice/",
    },
    {
      title: "The tricky behavior of useEffect hook in React 18",
      href: "https://medium.com/geekculture/the-tricky-behavior-of-useeffect-hook-in-react-18-282ef4fb570a",
    },
    {
      title: "React 18 useEffect runs twice",
      href: "https://www.techiediaries.com/react-18-useeffect/",
    },
    {
      title: "Duckduckgo useEffect firing twice strict",
      href: "https://duckduckgo.com/?q=useEffect+firing+twice+strict&t=ffab&ia=web",
    },
  ];

  return (
    <div className="exercise-five">
      <h1>Exercise 5</h1>
      <h2>Remote Data Fetching & useEffect</h2>
      <p>
        In this exercise, we use <code>useEffect</code> to fire off a fetch
        request to an API whenever the component mounts.
      </p>
      <h2>Result from API</h2>
      <ul className="result-scroll">
        {data.map((coffee) => (
          <li key={coffee.title}>
            {coffee.title} {coffee.description}
          </li>
        ))}
      </ul>
      <hr />
      <h2>Notes</h2>
      <p>
        <code>useEffect</code> is an interesting{" "}
        <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">
          React hook
        </a>
        .
      </p>
      <p>
        Essentially what it does is run some code whenever some data changes.
        The first argument is the function that you want to run. The second
        argument is an array of the data that you want to listen to (a.k.a. the
        dependencies). Whenever one of the dependencies changes, then{" "}
        <code>useEffect</code> will run the function provided in the first
        argument.
      </p>
      <p>
        The first argument can also return a cleanup function within itself
        (essentially a function which returns a function - a little confusing).
        This code will be run whenever the component unmounts.
      </p>
      <Prism language="jsx">{exampleCodeBlock}</Prism>
      <p>
        <code>useEffect</code> can also be used to run some code whenever the
        component <b>mounts</b>. In older versions of React, mounting and
        unmounting events were handled via Class-based component{" "}
        <a
          href="https://www.codecademy.com/resources/docs/react/lifecycle-methods"
          target="_blank"
        >
          "Lifecycle Methods"
        </a>
        . Nowadays, you very rarely see{" "}
        <a
          href="https://upmostly.com/tutorials/react-functional-vs-class-components"
          target="_blank"
        >
          Class-based components and instead you see a lot more Function-based
          components
        </a>{" "}
        using React Hooks. To be a competent React developer, you should have a
        decent understanding of both styles, but you should opt to write
        functional components when possible.
      </p>
      <p>
        When the dependencies array of a useEffect call is left blank, it
        simulates the "componentDidMount" functionality.
      </p>
      <Prism language="jsx">{exampleOnMountCodeBlock}</Prism>
      <h2>React 18 Changes</h2>
      <p>
        With React 18 (the version that this app is running), there is a change
        which causes <code>useEffect</code> to fire twice when running the app
        in{" "}
        <a href="https://reactjs.org/docs/strict-mode.html" target="_blank">
          "Strict Mode"
        </a>
        . This has been a very confusing change to a large portion of React
        developers.
      </p>
      <ul>
        {links.map((link) => (
          <li>
            <a href={link.href} key={`blog-links-${link.href}`} target="_blank">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <p>
        Since this is a new change, I've included code which shows the new way
        of calling fetch from useEffect and having it only fetch once.
      </p>
      <p>
        What do you think about this code? Can you open your browser's devtools,
        refresh the page, and confirm that it only fires off a single API call?
        Do you think the previous code was cleaner? What other things do you
        think you can do with useEffect?
      </p>
    </div>
  );
};

export default ExerciseFive;
