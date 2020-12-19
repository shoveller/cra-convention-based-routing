import React from "react";
import "./App.css";
import { DynamicRoutes } from "./DynamicRoutes";

const Loading = () => <div>로딩</div>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DynamicRoutes Loading={<Loading />} />
      </header>
    </div>
  );
}

export default App;
