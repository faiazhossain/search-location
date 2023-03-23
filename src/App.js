import React, { createContext, useEffect, useState } from "react";
import Maps from "./components/Maps";
import SearchBox from "./components/SearchBox";
import "./App.css";
export const ThemeContext = createContext(null);

const App = () => {
  const [selectLocation, setSelectLocation] = useState(null);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  console.log(theme);

  const toggleInput = (
    <div className="form-control ml-2 w-2/12" onClick={toggleTheme}>
      <label className="label cursor-pointer">
        <span className="label">{theme}</span>
        <input type="checkbox" className="toggle" />
      </label>
    </div>
  );
  return (
    <div className="border-solid flex flex-row w-screen h-screen gap-2">
      {/* left part search field */}
      <div className="w-1/3 flex">
        <div className="w-full">
          <SearchBox
            selectLocation={selectLocation}
            setSelectLocation={setSelectLocation}
            theme={theme}
            toggleInput={toggleInput}
          ></SearchBox>
        </div>
      </div>
      {/* right part Map */}
      <div className="w-2/3 h-full">
        <Maps selectLocation={selectLocation} theme={theme}></Maps>
      </div>
    </div>
  );
};

export default App;
