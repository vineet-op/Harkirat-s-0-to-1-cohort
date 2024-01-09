import React, { useState } from "react";
import Card from "./Card";
import Form from "./Form";

const App = () => {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (formData) => {
    const interestsArray = formData.interests
      .split(",")
      .map((interest) => interest.trim());
    const socialMediaObj = {
      linkedin: formData.socialMedia.split(",")[0]?.trim() || "",
      twitter: formData.socialMedia.split(",")[1]?.trim() || "",
    };

    setUserData({
      name: formData.name,
      description: formData.description,
      socialMedia: socialMediaObj,
      interests: interestsArray,
    });
  };

  return (
    <div className="app">
      <h1>Create Your Business Card</h1>
      <div className="container">
        <div className="form-section">
          <Form onSubmit={handleFormSubmit} />
        </div>
        <div className="card-section">
          {userData && (
            <Card
              name={userData.name}
              description={userData.description}
              socialMedia={userData.socialMedia}
              interests={userData.interests}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
