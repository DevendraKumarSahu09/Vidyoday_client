
import React, { useState, useEffect } from "react";

import logo from "/assets/images/logo.png";

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: 'url("./homeBg.jpg")',
    backgroundColor: 'var(--secondary-color)',
  };


  const titleContainerStyle = {
    zIndex: 2,
    display: "flex",
    backgroundColor: 'var(--secondary-color)',
    padding: "20px",
    marginTop: "80px",
    justifyContent: "center",
    alignItems: "center",
    // border: "8px solid var(--dark-color)",
    // borderRadius: "4px",
  };

  const titleStyle = {
    zIndex: "1",
    textAlign: "center",
    // border: "8px solid var(--dark-color)",
    // borderRadius: "4px",
    padding: "20px",
  };

  const contentTitleStyle = {
    textAlign: "center",
    color: "var(--dark-color)",
    fontFamily: "Oswald",
    backgroundColor: "var(--primary-color)",
    width: "100%",
    fontSize: "4rem",
    fontWeight: 700,
    marginTop: "200px",
    zIndex: 2,
  };

  const descriptionStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.2rem",
    textAlign: "center",
    color: "black",
    maxWidth: "1000px",
    margin: "60px",
    zIndex: 2,
  };

  const buttonStyle = {
    backgroundColor: "var(--primary-color)",
    color: "white",
    border: "none",
    padding: "12px 24px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const bgImageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "98%",
    objectFit: "cover",
    zIndex: 0,
    opacity: 0.1, // Reduced opacity
  };



  const imageStyle = {
    position: "absolute",
    left: `${scrollPosition}px`,
    width: "300px",
    justifyContent: "center",
  };

  const imageBelowStyle = {
    position: "absolute",
    right: `${scrollPosition}px`,
    width: "300px",
    justifyContent: "center",
  };

  const textContainer = {
    textAlign: "center",
    alignItems: "center",
    marginBottom: "40px",
    backgroundColor: 'var(--secondary-color)',
    zIndex: 2,
  };

  const handleButtonClick = () => {
    // Handle button click event
    console.log("Button clicked!");
  };

  return (
    <div style={containerStyle}>
      <div style={containerStyle}>
      <img src={"/assets/images/homebg.png"} alt="Bg Image" style={bgImageStyle} />
        <div>
          <img src={"/assets/images/11.png"} alt="Above Image" style={imageStyle} />
          <div style={titleContainerStyle}>
            <div style={titleStyle}>
              <img style={{width:"550px",}} src={logo} alt="" />
            </div>
          </div>
          <img src={"/assets/images/22.png"} alt="Below Image" style={imageBelowStyle} />
        </div>
      </div>
      <div style={contentTitleStyle}>WHY VIDYODAY?</div>
      <div id="why-skill-swap" style={textContainer}>
        <div style={descriptionStyle}>
          At Vidyoday, we believe in the power of mutual learning and collaboration. Here's why Vidyoday is the
          ultimate platform for skill acquisition and knowledge exchange:
          <br />
          <br />
          <br />
          <h4 style={{ color: "var(--dark-color)" }}>➊ Learn From Experts:</h4> Gain insights and practical knowledge directly
          from experienced mentors who excel in their respective fields. Whether it's mastering a new programming
          language, honing your culinary skills, or delving into the world of digital marketing, our mentors are here to
          guide you every step of the way.
          <br />
          <br />
          <h4 style={{ color: "var(--dark-color)" }}>➋ Share Your Expertise:</h4> Have a skill or passion you're eager to share?
          Vidyoday provides a platform for you to become a mentor yourself. Share your expertise with others, foster a
          sense of community, and contribute to the growth of aspiring learners.
          <br />
          <br />
          <h4 style={{ color: "var(--dark-color)" }}>➌ Collaborative Environment:</h4> Our community thrives on collaboration.
          Connect with like-minded individuals, participate in group projects, and engage in discussions that fuel
          creativity and innovation. Vidyoday isn't just about individual growth—it's about collective advancement.
          <br />
          <br />
          <h4 style={{ color: "var(--dark-color)" }}>➍ Diverse Learning Opportunities:</h4> With Vidyoday, the possibilities are
          endless and <b>free of cost</b>. Explore a wide range of topics and disciplines, from traditional crafts to
          cutting-edge technologies. Our diverse library of skills ensures there's something for everyone, regardless of
          your interests or background.
          <br />
          <br />
          <h4 style={{ color: "var(--dark-color)" }}>➎ Continuous Growth:</h4> Learning is a lifelong journey, and Vidyoday is
          here to support you every step of the way. Whether you're a novice or a seasoned professional, our platform
          empowers you to continuously expand your knowledge, challenge yourself, and embrace new opportunities.
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
