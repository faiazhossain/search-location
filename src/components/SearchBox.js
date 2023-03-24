import React, { useState } from "react";
import flag from "../img/blue-marker.png";

const B_KOI_URL =
  "https://barikoi.xyz/v1/api/search/autocomplete/NDYyNjpENlRRRDFVTjNX/place?";

export default function SearchBox({
  selectLocation,
  setSelectLocation,
  toggleInput,
}) {
  const [searchText, setSearchText] = useState("");
  const [listLocation, setListLocation] = useState([]);
  const fetchData = () => {
    const params = {
      q: searchText,
    };
    const queryString = new URLSearchParams(params).toString();
    fetch(`${B_KOI_URL}${queryString}`)
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        setListLocation(response.places);
      });
  };

  return (
    <div className="w-full">
      {/* input form and theme icon */}
      <div className="flex lg:mt-2 text-center items-center justify-center">
        <form
          className="flex lg:gap-4 mt-2 ml-2 w-full"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full text-black"
              value={searchText}
              onChange={(event) => {
                searchText && fetchData();
                setSearchText(event.target.value);
                setSelectLocation(null);
              }}
            />
            <button
              className="btn rounded-lg ml-2 px-4 py-1"
              onClick={() => {
                if (searchText) {
                  fetchData();
                }
              }}
            >
              Search
            </button>
          </div>
        </form>
        <div className="mt-2 ml-4">{toggleInput}</div>
      </div>

      {/* All location suggestions */}
      {!selectLocation && (
        <div className="overflow-x-auto mt-8 flex flex-col gap-4 ml-4">
          {listLocation.map((item) => {
            return (
              <div
                key={item?.id}
                onClick={() => {
                  setSelectLocation(item);
                  setSearchText(item.address);
                }}
              >
                <div className="flex mb-2">
                  <img src={flag} alt="" className="w-8 h-8" />
                  <h4 className="hover:cursor-pointer ml-4">{item.address}</h4>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      )}

      {/* Selected location card */}
      {selectLocation && (
        <div className="card w-full shadow-xl">
          <div className="card-body shadow-sm">
            <h2 className="card-title">
              <span className="text-sm">Address:</span>
              <span className="text-lg ml-2">{selectLocation.address}</span>
            </h2>
            <p>
              <span className="text-xs">Place Type:</span>
              <span className="text-lg ml-2">{selectLocation.pType}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
