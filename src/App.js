import React, { useState } from "react";
import Maps from "./components/Maps";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [selectLocation, setSelectLocation] = useState(null);
  console.log(selectLocation);
  return (
    <div className="border-solid flex flex-row w-screen h-screen gap-2">
      <div className="w-1/3">
        <SearchBox
          selectLocation={selectLocation}
          setSelectLocation={setSelectLocation}
        ></SearchBox>
      </div>
      <div className="w-2/3 h-full">
        <Maps selectLocation={selectLocation}></Maps>
      </div>
    </div>
  );
};

export default App;
