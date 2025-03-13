"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const buttons = ["rent", "buy"];
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (type) => {
    setQuery((prev) => ({ ...prev, type: type }));
  };

  return (
    <div className="flex flex-col gap-5 bg-white shadow-md p-6 rounded-xl w-full max-w-3xl mx-auto">
      {/* Toggle Buttons */}
      <div className="flex gap-2 bg-gray-200 p-1 rounded-lg">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={`cursor-pointer capitalize w-1/2 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
              query.type === btn
                ? "bg-amber-400 text-white shadow-md"
                : "bg-transparent text-gray-600"
            }`}
            onClick={() => switchType(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Search Form */}
      <form className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="location"
          placeholder="City Location"
          className="w-full md:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-0 outline-none transition-all"
        />
        <input
          type="number"
          min={0}
          max={10000000}
          name="minPrice"
          placeholder="Min Price"
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-0 outline-none transition-all"
        />
        <input
          type="number"
          min={0}
          max={10000000}
          name="maxPrice"
          placeholder="Max Price"
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-0 outline-none transition-all"
        />
        <button className="cursor-pointer bg-amber-400 text-white px-6 py-2 rounded-lg flex items-center justify-center hover:shadow-lg transition-all">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
