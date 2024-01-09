import React from "react";

const Card = ({ name, description, socialMedia, interests }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 mx-auto max-w-md">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <p className="text-gray-300 mb-4">{description}</p>

      <div className="flex space-x-4">
        <a
          href={socialMedia.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          LinkedIn
        </a>
        <a
          href={socialMedia.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          Twitter
        </a>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Interests</h3>
        <ul>
          {interests.map((interest, index) => (
            <li key={index} className="mb-1">
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
