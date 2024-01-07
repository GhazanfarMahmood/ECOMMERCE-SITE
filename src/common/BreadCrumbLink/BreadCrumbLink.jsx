import React from "react";

import "./BreadCrumbLink.scss";

import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const BreadCrumbLink = ({ pageName }) => {
  return (
    <>
      <div className="bread-crumb-card ms-3">
        <NavLink to={"/"}>
          <FaHome />
          Home
        </NavLink>
        <span>
          <MdChevronRight />
          {pageName}
        </span>
      </div>
    </>
  );
};

export default BreadCrumbLink;
