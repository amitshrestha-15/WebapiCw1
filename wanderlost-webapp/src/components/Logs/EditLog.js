import React, { useState } from 'react';

const MyComponent = () => {
  // State management using useState hook
  const [count, setCount] = useState(0);

  // Function to handle incrementing count
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-indigo-600">
          Add New Trip
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="tripName"
              className="block text-gray-800 font-medium mb-2"
            >
              Trip Name
            </label>
            <input
              type="text"
              id="tripName"
              name="tripName"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
              value={tripName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-800 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
              value={description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-800 font-medium mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
              value={location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-gray-800 font-medium mb-2"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
              value={date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-800 font-medium mb-2"
            >
              Image
            </label>
            <div className="flex items-center space-x-2">
              <label
                htmlFor="image"
                className="cursor-pointer text-indigo-600 hover:underline"
              >
                Choose a file
              </label>

              <input
                type="file"
                id="image"
                name="logImage"
                accept="image/*"
                className="hidden"
                onChange={handleInputChnage}
                required
              />
            </div>
            {logImagePreview && (
              <img
                src={logImagePreview}
                alt="log Img"
                className="mt-2 w-full h-32 object-cover rounded-md"
              />
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
          >
            {loading && <span>loading....</span>}Add Trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyComponent;
