import React from "react";

const LogCard = ({ log }) => {
  return (
    <div className="log-card">
      <div className="bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden mb-4">
        <img
          src={`http://localhost:5000/uploads/${log.logImage}`}
          alt="Card"
          className="w-full h-40 object-cover rounded-t-md border-b border-gray-300"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">
            Name your trip : {log.tripName}
          </h2>
          <p className="text-gray-800 mb-2">Description: {log.description}</p>
          <p className="text-gray-700 mb-2">Where is it ?: {log.location}</p>
          <p className="text-gray-600">Date : {log.date}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            // onClick={() => handleEdit(log.id)} 
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            // onClick={() => handleDelete(log.id)} 
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogCard;
