import React from "react";
import Service from "./Service";
import design_icon from "../assets/icon-design.svg";
import dev_icon from "../assets/icon-dev.svg";
import app_icon from "../assets/icon-app.svg";
import photo_icon from "../assets/icon-app.svg";
const About = () => {
  const servicesData = [
    {
      icon: dev_icon,
      title: "Web development",
      description:
        "High-quality development of sites at the professional level.",
    },
    {
      icon: design_icon,
      title: "Web design",
      description:
        "The most modern and high-quality design made at a professional level.",
    },
    {
      icon: app_icon,
      title: "Mobile apps",
      description:
        "Learning period in Professional development of applications for iOS and Android.",
    },
    {
      icon: photo_icon,
      title: "Photography",
      description:
        "I make high-quality photos of any category at a professional level.",
    },
  ];
  return (
    <div>
      <article data-page="about" className="text-white p-10 mt-16">
        <header>
          <h2 className="text-4xl text-slate-900 font-bold">About me</h2>
        </header>
        <section className="mt-6 text-lg">
          <p className="font-semibold text-2xl">
            A Passionate Software Enginner From India.
          </p>
          <p>Proficient in front-end and back-end technologies.</p>
        </section>
        {/* <!--- service--> */}
        <section className="service">
          <h3 className="text-3xl font-bold text-slate-900 mt-6">
            What i'm doing
          </h3>
          <ul className="grid grid-cols-2 gap-16 mt-6 phone-sm:grid phone-sm:grid-cols-1 width-all:grid width-all:grid-cols-2">
            {servicesData.map((service, index) => (
              <Service
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-3xl font-bold text-slate-900 mt-6">Skill</h3>
          <p className="text-lg mt-2">
            - Proficient in HTML, CSS, JavaScript, and related frameworks (e.g.
            React.js)
          </p>
          <p className="text-lg mt-2">
            - Experienced in server-side programming languages such as Node.js
          </p>
          <p className="text-lg mt-2">
            - Familiar with database management systems like MongoDB, MySQL, and
            Firebase.
          </p>
          <p className="text-lg mt-2">
            - Strong understanding of web development principles, including
            responsive design, cross-browser compatibility, and accessibility
            standards.
          </p>
          <p className="text-lg mt-2">
            - Knowledgeable in version control systems (e.g., Git) and
            deployment platforms (e.g., Vercel , AWS , Netlify)
          </p>
          <p className="text-lg mt-2">
            - Excellent problem-solving skills and ability to work effectively
            both independently and in a team environment.
          </p>
        </section>
      </article>
    </div>
  );
};

export default About;
