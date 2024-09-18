import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  const handleGoogleLogin = () => {
    // window.location.href = "https://vidyoday-server.onrender.com/auth/google";
    window.location.href = "http://localhost:8000/auth/google";
  };

  const containerStyle = {
    // height: "90.4vh",
    minHeight: "88vh",
    margin: "auto",
    // height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--secondary-color)",
  };

  const loginBoxStyle = {
    height: "200px",
    display: "flex",
    backgroundColor: "var(--secondary-color)",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
    
    marginTop:"-100px",

  };

  const titleStyle = {
    fontSize: "50px",
    fontWeight: "600",
    fontFamily: "Sedan, sans-serif", // Font family
    color: "var(--dark-color)", // Text color
    textAlign: "center",
  };

  const spanStyle = {
    color:"grey",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const buttonStyle = {
    backgroundColor: "var(--primary-color)", // Button background color
    color: "#fff", // Button text color
    fontFamily: "Montserrat",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const hoverButtonStyle = {
    backgroundColor: "#fff", // Button background color on hover
    color: "#f56664", // Button text color on hover
    fontFamily: "Montserrat",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.5s ease-in-out", // Transition effect
  };

  const imageStyle = {
    position: "absolute",
    left: "100px", // Position the above image to the left
    top: "80px", // Add some space from the top
    width: "550px",
    marginBottom: "20px", // Add margin bottom to create space between image and login box
  };

  return (
    <div style={containerStyle}>
      {/* <img src={"/assets/images/login.png"} alt="Login Image" style={imageStyle} /> */}
      <div style={loginBoxStyle}>
        <h1 style={titleStyle}>Login</h1>
        <span style={spanStyle}>--------------------------------------------</span>
        <div style={buttonContainerStyle}>
          <Button
            style={isHovered ? hoverButtonStyle : buttonStyle} // Apply style based on hover state
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
            onClick={handleGoogleLogin}
          >
            <FaGoogle /> Login with Google
          </Button>
        </div>
      </div>
     </div>
  );
};

export default Login;

