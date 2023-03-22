import React from "react";
import Maps from "./components/Maps";
import SearchBox from "./components/SearchBox";

const App = () => {
  return (
    <div className="border-solid border-indigo-500 border-2 flex flex-row w-screen h-screen">
      <div className="border-solid border-indigo-500 border-2 w-1/2">
        <SearchBox></SearchBox>
      </div>
      <div className="border-solid border-indigo-500 border-2 w-1/2 h-full">
        <Maps></Maps>
      </div>
    </div>
  );
};

export default App;
