import React from "react";

const Service = ({ title, icon, description }) => {
  return (
    <div className="bg-gray-600 p-5">
      <li className="flex gap-5">
        <div className="service-icon-box">
          <img
            src={icon}
            alt={`${title} icon`}
            width="40"
            className="phone-sm:w-40 width-all:w-20"
          />
        </div>
        <div className="service-content-box">
          <h4 className="text-2xl font-semibold">{title}</h4>
          <p className="mt-2">{description}</p>
        </div>
      </li>
    </div>
  );
};

export default Service;
