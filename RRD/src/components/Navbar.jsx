import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      </div>
    </div>
  );
};

export default Navbar;
