import React from "react";
import Skeleton from "react-loading-skeleton";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import { DynamicRoutes } from "./DynamicRoutes";

const Loading = () => (
  <div>
    <Skeleton width={50} />
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">메인페이지로</Link>
            </li>
            <li>
              <Link to="/sub">서브페이지로</Link>
            </li>
          </ul>
          <DynamicRoutes Loading={<Loading />} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
