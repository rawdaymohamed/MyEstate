import React from "react";
import { FaSearch } from "react-icons/fa";

const Filter = () => {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl w-full">
      {/* Heading */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
        Search results for <span className="text-amber-500">Cairo</span>
      </h1>

      {/* Filter Form */}
      <div className="flex flex-col gap-4">
        {/* Location */}
        <div className="flex flex-col w-full">
          <label className="text-sm font-medium mb-1" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Enter city..."
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-0 outline-none transition-all"
          />
        </div>

        {/* Filters Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Type */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="type">
              Type
            </label>
            <select
              id="type"
              name="type"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-0 outline-none transition-all bg-white"
            >
              <option value="">Any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          {/* Property */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="property">
              Property
            </label>
            <select
              id="property"
              name="property"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-0 outline-none transition-all bg-white"
            >
              <option value="">Any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>

          {/* Min Price */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="minprice">
              Min Price
            </label>
            <input
              type="number"
              name="minprice"
              id="minprice"
              placeholder="Any"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-0 outline-none transition-all"
            />
          </div>

          {/* Max Price */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="maxprice">
              Max Price
            </label>
            <input
              type="number"
              name="maxprice"
              id="maxprice"
              placeholder="Any"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-0 outline-none transition-all"
            />
          </div>

          {/* Bedroom */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="bedroom">
              Bedroom
            </label>
            <input
              type="number"
              name="bedroom"
              id="bedroom"
              placeholder="Any"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-0 outline-none transition-all"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="w-full h-12 bg-amber-400 text-white px-6 rounded-lg flex items-center justify-center hover:shadow-lg transition-all cursor-pointer">
              <FaSearch className="mr-2 text-lg" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
