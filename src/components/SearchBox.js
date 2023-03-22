import React, { useState } from "react";
import flag from "../img/blue-marker.png";
export default function SearchBox() {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  return (
    <div className="w-full">
      <div className="flex gap-4 mt-2 ml-2 w-full">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xl"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button className="bg-cyan-200 mr-2 p-2 rounded-md">Search</button>
      </div>
      <div className="overflow-x-auto mt-4 flex flex-col">
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <div className="flex">
              <img src={flag} alt="" className="w-8 h-6" />
              <h4>Inbox</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
