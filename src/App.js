import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Related from "./components/Related";
import CardList from "./components/Cards";
import { data } from "./data/FakeData";
const postsPerPage = 3;
let arrayForHoldingPosts = [];

function App() {
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedPosts = data.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };
  return (
    <div className="App">
      <main className="container bg-light p-4">
        <Related />
        <div className="row text-white">
          <CardList postsToRender={postsToShow} />
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-danger align-self-center"
            onClick={handleShowMorePosts}
          >
            Load more
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
