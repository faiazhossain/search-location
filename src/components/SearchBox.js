import React, { useState } from "react";
import flag from "../img/blue-marker.png";

const B_KOI_URL =
  "https://barikoi.xyz/v1/api/search/autocomplete/NDYyNjpENlRRRDFVTjNX/place?";

export default function SearchBox({ selectLocation, setSelectLocation }) {
  const [searchText, setSearchText] = useState("");
  const [listLocation, setListLocation] = useState([]);
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
            setSearchText(event.target.value);
          }}
        />
        <button
          className="bg-cyan-200 mr-2 p-2 rounded-md"
          onClick={() => {
            const params = {
              q: searchText,
            };
            const queryString = new URLSearchParams(params).toString();
            console.log(queryString);
            // const requestOptions = {
            //   method: "GET",
            //   redirect: "follow",
            // };
            fetch(`${B_KOI_URL}${queryString}`)
              .then((response) => response.json())
              .catch((error) => console.error("Error:", error))
              .then((response) => {
                setListLocation(response.places);
                console.log(listLocation);
                console.log("Success:", response);
              });
          }}
        >
          Search
        </button>
      </form>
      {
        <div className="overflow-x-auto mt-4 flex flex-col gap-4 ml-4">
          {listLocation.filter((item) => {
            const searchTerm = value.toLowerCase;
          })}
          {listLocation.map((item) => {
            return (
              <div
                key={item?.id}
                onClick={() => {
                  setSelectLocation(item);
                }}
                className="flex"
              >
                <img src={flag} alt="" className="w-8 h-6" />
                <h4>{item.address}</h4>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}
