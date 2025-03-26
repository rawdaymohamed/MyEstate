"use client";
import React, { useState } from "react";
import { apiRequest } from "@/app/lib/apiRequest";

const AddPostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    latitude: "",
    longitude: "",
    type: "buy",
    property: "apartment",
    description: "",
    utilities: "",
    pet: "",
    income: "",
    size: "",
    schools: "",
    restaurant: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    let newValue = value;
    if (type === "number") {
      newValue = value === "" ? "" : Math.max(0, Number(value));
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        title: formData.title,
        price: Number(formData.price),
        address: formData.address,
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        latitude: formData.latitude,
        longitude: formData.longitude,
        type: formData.type,
        property: formData.property,
      };

      const postDetails = {
        description: formData.description,
        utilities: formData.utilities || null,
        pet: formData.pet || null,
        income: formData.income || null,
        size: formData.size ? Number(formData.size) : null,
        schools: formData.schools ? Number(formData.schools) : null,
        restaurant: formData.restaurant ? Number(formData.restaurant) : null,
      };

      const res = await apiRequest.post("/posts", { postData, postDetails });
      console.log(res.data);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to submit post. Please try again."
      );
    }
  };

  return (
    <div className="pt-[5vh] md:pt-[12vh] w-[95%] lg:w-[80%] xl:w-[70%] mx-auto h-auto pb-10">
      <h1 className="text-2xl font-bold mb-6">New Post</h1>
      {error && <span className="text-red-500 text-sm">{error}</span>}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="border border-gray-300 rounded-md p-3"
          required
        />
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
          name="address"
          value={formData.address}
          onChange={handleChange}
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
          name="latitude"
          value={formData.latitude}
          onChange={handleChange}
          placeholder="Latitude"
          className="border border-gray-300 rounded-md p-3"
          required
        />
        <input
          type="text"
          name="longitude"
          value={formData.longitude}
          onChange={handleChange}
          placeholder="Longitude"
          className="border border-gray-300 rounded-md p-3"
          required
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-3"
          required
        >
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
        <select
          name="property"
          value={formData.property}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-3"
          required
        >
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
        </select>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border border-gray-300 rounded-md p-3"
          required
        ></textarea>
        <input
          type="text"
          name="utilities"
          value={formData.utilities}
          onChange={handleChange}
          placeholder="Utilities"
          className="border border-gray-300 rounded-md p-3"
        />
        <input
          type="text"
          name="pet"
          value={formData.pet}
          onChange={handleChange}
          placeholder="Pet"
          className="border border-gray-300 rounded-md p-3"
        />
        <input
          type="text"
          name="income"
          value={formData.income}
          onChange={handleChange}
          placeholder="Income"
          className="border border-gray-300 rounded-md p-3"
        />
        <input
          type="number"
          name="size"
          value={formData.size}
          onChange={handleChange}
          placeholder="Size"
          className="border border-gray-300 rounded-md p-3"
        />
        <input
          type="number"
          name="schools"
          value={formData.schools}
          onChange={handleChange}
          placeholder="Schools"
          className="border border-gray-300 rounded-md p-3"
        />
        <input
          type="number"
          name="restaurant"
          value={formData.restaurant}
          onChange={handleChange}
          placeholder="restaurant"
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
