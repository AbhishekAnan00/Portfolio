import React from "react";
import portfollio_image from "../assets/image.png";
import { GiMayanPyramid, GiPhone } from "react-icons/gi";
import { SiMinutemailer } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import resume from "../assets/resu.pdf";
const Sidebar = ({ sidebar }) => {
  return (
    <>
      {sidebar && (
        <div className="bg-slate-700 h-[100vh] w-[35%] pl-5 mt-16 phone-sm:w-[100%] phone-md:w-[100%] phone-lg:w-[100%] phone-xl:w-[100%] phone-2xl:w-[100%] width-all:w-[35%]">
          <div className="flex flex-col justify-center items-center mt-6">
            <figure>
              <img
                src={portfollio_image}
                alt="Abhishek Anand"
                width="120"
                className="rounded-full"
              />
            </figure>
            <div className="text-center items-center flex flex-col justify-center">
              <h1
                className="mt-3 text-3xl font-semibold text-white"
                title="Abhishek Anand"
              >
                Abhishek Anand
              </h1>
              <p className="bg-gray-600 text-white w-[140px] p-2 rounded-lg text-center mt-3">
                Web developer
              </p>
              <a href={resume} download="resume.pdf">
                <button className="bg-sky-700 hover:bg-sky-800 text-white w-[140px] p-2 font-semibold rounded-lg text-center mt-3">
                  Resume
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-6">
            <div className="h-[1px] w-[80%] bg-slate-900 mt-5"></div>
            <ul>
              <li className="flex gap-8 mt-5 text-white phone-sm:gap-2 phone-md:gap-3 phone-lg:gap-4 phone-xl:gap-5 phone-2xl:gap-6 width-all:gap-8">
                <div className=" text-teal-600 text-3xl">
                  <SiMinutemailer />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">Email</p>
                  <a
                    href="mailto:email.abhishek00@gmail.com"
                    className="text-lg"
                  >
                    email.abhishek00@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex gap-8 mt-5 text-white phone-sm:gap-2 phone-md:gap-3 phone-lg:gap-4 phone-xl:gap-5 phone-2xl:gap-6 width-all:gap-8">
                <div className="text-teal-600 text-3xl">
                  <GiPhone />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">Phone</p>

                  <a href="tel:+917482993709" className="contact-link text-lg">
                    +91 7482993709
                  </a>
                </div>
              </li>
              <li className="flex gap-8 mt-5 text-white phone-sm:gap-2 phone-md:gap-3 phone-lg:gap-4 phone-xl:gap-5 phone-2xl:gap-6 width-all:gap-8">
                <div className="text-teal-600 text-3xl">
                  <GiMayanPyramid />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    Location
                  </p>
                  <address>India</address>
                </div>
              </li>
            </ul>
            <div className="h-[1px] w-[80%] bg-slate-900 mt-8"></div>
            <ul className="flex gap-10 text-3xl text-slate-950 mt-6">
              <li>
                <a
                  href="https://github.com/AbhishekAnan00"
                  className="social-link"
                >
                  <ion-icon name="logo-github">
                    <FaGithub className="hover:text-teal-600" />
                  </ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/AbhishekAnan00"
                  className="social-link"
                >
                  <ion-icon name="logo-twitter">
                    <FaXTwitter className="hover:text-teal-600" />
                  </ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/abhishekanan00"
                  className="social-link"
                >
                  <ion-icon name="logo-linkedin">
                    <FaLinkedin className="hover:text-teal-600" />
                  </ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
