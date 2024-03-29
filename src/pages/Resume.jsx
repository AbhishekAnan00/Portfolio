import React from "react";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <div>
      <div className="text-white p-5 mt-16">
        <h3 className="text-3xl text-slate-900 font-bold mb-6">My Projects</h3>
        <a
          href="https://amazonprojectdeploy.netlify.app"
          className="text-blue-950 font-bold text-2xl"
        >
          Link
        </a>
        <p className="text-xl font-bold">E-Commerce</p>
        <p className="text-lg">
          - The development of an e-commerce platform with functionalities
          similar to Amazon.
        </p>
        <p className="text-lg">
          - Implemented robust user authentication system using technologies
          such as JWT (JSON Web Tokens) and OAuth, ensuring secure access to
          user accounts and personal information.
        </p>
        <p className="text-lg">
          - Integrated payment gateway solutions, including Razorpay and secure
          online transactions for customers.
        </p>
        <p className="text-lg">
          - Implemented advanced features such as sorting, wishlist, cart,
          reviews, and ratings.
        </p>
        <p className="text-lg">
          - Designed and implemented a responsive and user-friendly interface
          and phone screen size specially.
        </p>
      </div>
      <div className="text-white p-5">
        <a
          href="https://gmailweb.netlify.app/"
          className="text-blue-950 font-bold text-2xl"
        >
          Link
        </a>
        <p className="text-xl font-bold">Gmail Clone</p>
        <p className="text-lg">
          - The development of an email service platform resembling Gmail.
        </p>
        <p className="text-lg">
          - Developed robust user authentication and authorization systems to
          secure user accounts and sensitive information.
        </p>
        <p className="text-lg">
          - Integrated advanced email management features such as inbox
          organization, send, searching email, labeling, and filtering.
        </p>
        <p className="text-lg">
          - Implemented real-time email notifications, enhancing user experience
          and engagement.
        </p>
        <p className="text-lg">
          - Collaborated closely with UX/UI designers to create visually
          appealing email composition and focusing on readability and
          accessibility.
        </p>
        <p className="text-lg">
          - Designed and implemented a responsive and user-friendly interface
          and phone screen size specially.
        </p>
      </div>
      <div className="text-white p-5">
        <a
          href="https://github.com/AbhishekAnan00/TwitterClone"
          className="text-blue-950 font-bold text-2xl"
        >
          Link
        </a>
        <p className="text-xl font-bold">Twitter Clone</p>
        <p className="text-lg">
          - Developed a Twitter clone application using the MERN (MongoDB,
          Express.js, React.js, Node.js) stack, showcasing proficiency in
          full-stack web development.
        </p>
        <p className="text-lg">
          - Integrated MongoDB as the database solution for storing user data,
          profile, posts, tweets and more interactions.
        </p>
        <p className="text-lg">
          - RESTful API services using Node.js and Express.js to handle data
          interactions between the frontend and MongoDB database.
        </p>
        <p className="text-lg">
          - Utilized JWT authentication using MongoDB for secure user
          authentication and real-time updates.
        </p>
      </div>
      <div className="flex flex-col p-5 gap-5 ">
        <h3 className="text-3xl text-slate-900 font-bold mb-6">My skills</h3>
        <ul className="w-[85vw] bg-gray-700">
          <SkillItem title="Web Development" value={80} />
          <SkillItem title="Graphic design" value={70} />
          <SkillItem title="Web Design" value={80} />
          <SkillItem title="Branding" value={90} />
        </ul>
      </div>
      <div className="text-white p-5">
        <h3 className="text-3xl text-slate-900 font-bold mb-6">My Education</h3>
        <p className="text-lg text-white font-semibold">
          Bachelor of Technology in Mechanical Engineering.
        </p>
        <p className="font-semibold text-lg">BEU University | India | 2023</p>
      </div>
    </div>
  );
};

export default Resume;
