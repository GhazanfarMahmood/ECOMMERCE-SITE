import React from "react";

//Services section css
import "./Services.scss";

//Services data come from utility files
import { SERVICESDATA } from "../../../Utils/ServicesData";

const Services = () => {
  return (
    <>
      <div className="services-container ms-3">
        <div className="services-box">
        <h1>
          Our <span>Services</span>
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, quas porro quasi ratione <br /> ab iusto veniam, dolorem id a explicabo suscipit.</p>
        </div>
        <div className="services-items">
            {SERVICESDATA.map((data) =>(
            <div className="services-card" key={data.id}>
                <span >{data.icons}</span>
                <div>
                <h3>{data.h2}</h3>
                <p>{data.p}</p>
                </div>
                </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Services;
