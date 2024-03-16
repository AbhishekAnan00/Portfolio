import React from "react";

const SkillItem = ({ title, value }) => {
  return (
    <div>
      <li className="p-6">
        <div className="flex gap-5 mb-6">
          <h5 className="text-2xl font-bold text-slate-900">{title}</h5>
          <data value={value} className="text-gray-200 text-xl font-semibold">
            {value}%
          </data>
        </div>
        <div className="w-full h-6 rounded-lg">
          <div
            className=" bg-teal-600 h-[100%] "
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </li>
    </div>
  );
};

export default SkillItem;
