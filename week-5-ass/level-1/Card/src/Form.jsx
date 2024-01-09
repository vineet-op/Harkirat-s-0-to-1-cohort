import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    socialMedia: "",
    interests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="p-4">
      <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-1 px-3 w-full focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">
            Description:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-1 px-3 w-full focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="socialMedia" className="block mb-1">
            Social Media (comma-separated LinkedIn,Twitter):
          </label>
          <input
            type="text"
            id="socialMedia"
            name="socialMedia"
            value={formData.socialMedia}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-1 px-3 w-full focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="interests" className="block mb-1">
            Interests (comma-separated):
          </label>
          <input
            type="text"
            id="interests"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-1 px-3 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="bg-yellow-300">
          Create Card
        </button>
      </form>
    </div>
  );
};

export default Form;
