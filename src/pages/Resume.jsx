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
          Link 1
        </a>
        <p className="text-xl font-bold">E-Commerce</p>
        <p>
          - Led the development of an e-commerce platform with functionalities
          similar to Amazon.
        </p>
        <p>
          - Implemented robust user authentication system using technologies
          such as JWT (JSON Web Tokens) and OAuth, ensuring secure access to
          user accounts and personal information.
        </p>
        <p>
          - Integrated payment gateway solutions, including Razorpay, enabling
          seamless and secure online transactions for customers.
        </p>
        <p>
          - Developed product search and filtering mechanisms, allowing users to
          easily find and browse through a wide range of products.
        </p>
        <p>
          - Designed and implemented a responsive and user-friendly interface,
          ensuring optimal user experience across various devices and screen
          sizes.
        </p>
        <p>
          - Collaborated closely with UX/UI designers to create visually
          appealing product pages and intuitive navigation menus.
        </p>
        <p>
          - Implemented advanced features such as wishlist, reviews, and
          ratings, enhancing user engagement and satisfaction.
        </p>
        <p>
          - Conducted regular performance optimization and bug fixing to
          maintain the website's stability and responsiveness.
        </p>
        <p>
          - Analyzed user behavior and sales data to identify trends and
          opportunities for feature enhancements and optimizations.
        </p>
      </div>
      <div className="text-white p-5">
        <a
          href="https://gmailweb.netlify.app/"
          className="text-blue-950 font-bold text-2xl"
        >
          Link 2
        </a>
        <p className="text-xl font-bold">Gmail</p>
        <p>
          - Spearheaded the development of an email service platform resembling
          Gmail.
        </p>
        <p>
          - Designed and implemented a responsive and intuitive user interface,
          ensuring seamless navigation and usability across various devices and
          screen sizes.
        </p>
        <p>
          - Developed robust user authentication and authorization systems to
          secure user accounts and sensitive information.
        </p>
        <p>
          - Integrated advanced email management features such as inbox
          organization, labeling, and filtering, providing users with efficient
          tools to manage their emails effectively.
        </p>
        <p>
          - Implemented real-time email notifications , enhancing user
          experience and engagement.
        </p>
        <p>
          - Collaborated closely with UX/UI designers to create visually
          appealing email composition and reading interfaces, focusing on
          readability and accessibility.
        </p>
        <p>
          - Conducted thorough testing and debugging to ensure the reliability
          and performance of the email service, addressing any issues promptly
          to maintain a seamless user experience.
        </p>
        <p>
          - Analyzed user feedback and usage metrics to identify areas for
          improvement and implemented strategic enhancements to optimize the
          email service's performance and user satisfaction.
        </p>
      </div>
      <div className="text-white p-5">
        <a
          href="https://videotubedeploy.netlify.app"
          className="text-blue-950 font-bold text-2xl"
        >
          Link 3
        </a>
        <p className="text-xl font-bold">VideoTube</p>
        <p>
          - Led the development of a video-sharing platform resembling YouTube.
        </p>
        <p>
          - Designed and implemented a scalable and robust architecture to
          handle large volumes of video uploads, storage, and streaming,
          ensuring high performance and reliability.
        </p>
        <p>
          - Implemented features such as video playback, commenting, liking, and
          sharing, enhancing user engagement and interaction with the platform.
        </p>
        <p>
          - Collaborated closely with UX/UI designers to create an intuitive and
          user-friendly interface for video discovery, browsing, and viewing
          experiences.
        </p>
        <p>
          - Integrated advertising and monetization features, such as pre-roll
          and mid-roll ads, to generate revenue streams for the platform and
          content creators.
        </p>
        <p>
          - Conducted thorough testing and performance optimization to ensure
          smooth video streaming and playback across different devices and
          network conditions.
        </p>
        <p>
          - Analyzed user behavior and engagement metrics to identify trends and
          opportunities for feature enhancements and optimizations, leading to
          improvements in user retention and satisfaction.
        </p>
      </div>
      <div className="flex flex-col p-5 gap-5 ">
        <h3 className="text-3xl text-slate-900 font-bold mb-6">My skills</h3>
        <ul className="w-[75vw] bg-gray-700">
          <SkillItem title="Web Development" value={80} />
          <SkillItem title="Graphic design" value={70} />
          <SkillItem title="Web Design" value={80} />
          <SkillItem title="Branding" value={90} />
        </ul>
      </div>
      <div className="text-white p-5">
        <h3 className="text-3xl text-slate-900 font-bold mb-6">My Education</h3>
        <p className="text-lg text-white font-semibold">
          Bachelor of Science in Computer Science
        </p>
        <p className="font-semibold text-lg">BEU University | India | 2023</p>
      </div>
    </div>
  );
};

export default Resume;
