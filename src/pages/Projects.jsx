import React from "react";
import { FaRegEye } from "react-icons/fa";
import ecommerce_image from "../assets/ecommerce.jpg";
import gmail_image from "../assets/gmail.jpg";
import twitter_image from "../assets/twitter.jpg";
const Projects = () => {
  const project = [
    {
      id: 1,
      title: "E-Commerce",
      category: "Web Development",
      image: ecommerce_image,
      Link: "https://amazonprojectdeploy.netlify.app",
    },
    {
      id: 2,
      title: "Gmail Clone",
      category: "Web Development",
      image: gmail_image,
      Link: "https://gmailweb.netlify.app/",
    },
    {
      id: 3,
      title: "Twitter Clone",
      category: "FullStack Development",
      image: twitter_image,
      Link: "https://github.com/AbhishekAnan00/TwitterClone",
    },
  ];
  return (
    <div>
      <section className="projects p-5 width-all:w-[70vw] phone-sm:w-[90vw] mt-16">
        <h3 className="text-3xl text-slate-900 font-bold mb-6">Projects</h3>
        <ul className="project-list grid grid-cols-3 gap-20 phone-sm:grid phone-sm:grid-cols-1 width-all:grid width-all:grid-cols-3">
          {project.map((project) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project.id}
            >
              <a href={project.Link}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title text-2xl text-white font-semibold">
                  {project.title}
                </h3>
                <p className="project-category text-gray-300">
                  {project.category}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Projects;
