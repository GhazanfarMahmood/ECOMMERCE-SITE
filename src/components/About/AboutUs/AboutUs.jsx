import React from "react";

//About section css
import "./AboutUs.scss";

// Image come from assests
import AboutImage from "../../../assets/img/AboutImg.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container ms-3">
        <div className="about-us-box">
          <img src={AboutImage} alt="about-Image" />
          <div className="about-us-text">
            <h1>About <span>Us</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore asperiores voluptas corrupti ad consectetur? Placeat qui architecto dignissimos voluptates ea voluptatem. Obcaecati, eveniet beatae!</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore asperiores voluptas corrupti ad consectetur? Placeat qui architecto dignissimos voluptates ea voluptatem. Obcaecati, eveniet beatae!</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutUs;
