import React, { useState } from "react";
import flag from "../img/blue-marker.png";

const B_KOI_URL =
  "https://barikoi.xyz/v1/api/search/autocomplete/NDYyNjpENlRRRDFVTjNX/place?";

export default function SearchBox({ selectLocation, setSelectLocation }) {
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
  console.log(listLocation);
  return (
    <div className="w-full">
      <form
        className="flex gap-4 mt-2 ml-2 w-full"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xl"
          value={searchText}
          onChange={(event) => {
            searchText && fetchData();
            setSearchText(event.target.value);
            setSelectLocation(null);
          }}
        />
        <button
          className="bg-cyan-200 mr-2 p-2 rounded-md"
          onClick={() => {
            fetchData();
          }}
        >
          Search
        </button>
      </form>
      {!selectLocation && (
        <div className="overflow-x-auto mt-4 flex flex-col gap-4 ml-4">
          {listLocation.map((item) => {
            return (
              <div
                key={item?.id}
                onClick={() => {
                  setSelectLocation(item);
                  setSearchText(item.address);
                }}
                className="flex"
              >
                <img src={flag} alt="" className="w-8 h-6" />
                <h4 className="hover:cursor-pointer">{item.address}</h4>
              </div>
            );
          })}
        </div>
      )}
      {selectLocation && (
        <div className="card w-full bg-base-100 shadow-xl bg-yellow-50 mt-4">
          <div className="card-body">
            <h2 className="card-title">
              <span className="text-blue-700">Address:</span>
              <span className="text-lg ml-2">{selectLocation.address}</span>
            </h2>
            <p>
              <span className="text-blue-700">Place Type:</span>
              <span className="text-lg ml-2">{selectLocation.pType}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
