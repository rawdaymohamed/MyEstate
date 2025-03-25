"use client";
import { useState } from "react";

const AddPostForm = () => {
  const [formData, setFormData] = useState({
    price: "",
    bedrooms: "",
    bathrooms: "",
    totalSize: "",
    nearbySchools: "",
    nearbyBusStops: "",
    nearbyRestaurants: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value === "" || parseFloat(value) >= 0) {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="pt-[5vh] md:pt-[12vh] w-[95%] lg:w-[80%] xl:w-[70%] mx-auto h-auto pb-10">
      <h1 className="text-2xl font-bold my-6 text-center">New Post</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Title"
          className="md:col-span-2 border border-gray-300 rounded-md p-3"
          required
        />
        <textarea
          placeholder="Description"
          className="md:col-span-2 border border-gray-300 rounded-md p-3"
          required
        ></textarea>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="border border-gray-300 rounded-md p-3"
          required
        />
        <input
          type="text"
          placeholder="Address"
          className="border border-gray-300 rounded-md p-3"
          required
        />
        <input
          type="number"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          placeholder="Bedrooms"
          className="border border-gray-300 rounded-md p-3"
          required
        />
        <input
          type="number"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          placeholder="Bathrooms"
          className="border border-gray-300 rounded-md p-3"
          required
        />
        <input
          type="text"
          placeholder="Latitude"
          className="border border-gray-300 rounded-md p-3"
          required
        />
        <input
          type="text"
          placeholder="Longitude"
          className="border border-gray-300 rounded-md p-3"
          required
        />
        <select className="border border-gray-300 rounded-md p-3" required>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
        <select className="border border-gray-300 rounded-md p-3" required>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
        </select>

        <input
          type="text"
          placeholder="Utilities"
          className="border border-gray-300 rounded-md p-3"
        />
        <input
          type="text"
          placeholder="Pet Policy"
          className="border border-gray-300 rounded-md p-3"
        />
        <input
          type="text"
          placeholder="Income Policy"
          className="border border-gray-300 rounded-md p-3"
        />
        <input
          type="number"
          name="totalSize"
          value={formData.totalSize}
          onChange={handleChange}
          placeholder="Total Size (sqft)"
          className="border border-gray-300 rounded-md p-3"
        />
        <input
          type="number"
          name="nearbySchools"
          value={formData.nearbySchools}
          onChange={handleChange}
          placeholder="Nearby Schools"
          className="border border-gray-300 rounded-md p-3"
        />
        <input
          type="number"
          name="nearbyBusStops"
          value={formData.nearbyBusStops}
          onChange={handleChange}
          placeholder="Nearby Bus Stops"
          className="border border-gray-300 rounded-md p-3"
        />
        <input
          type="number"
          name="nearbyRestaurants"
          value={formData.nearbyRestaurants}
          onChange={handleChange}
          placeholder="Nearby Restaurants"
          className="border border-gray-300 rounded-md p-3"
        />
        <button
          type="submit"
          className="col-span-1 md:col-span-2 cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg shadow-md hover:from-amber-600 hover:to-amber-700 hover:shadow-lg transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
