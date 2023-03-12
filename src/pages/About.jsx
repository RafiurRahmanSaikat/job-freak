import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";

const About = () => {
  return (
    <>
      <div class="bg-white flex  items-center justify-center overflow-hidden w-screen ">
        <div className="mx-8 md:mx-48">
          <p className="text-3xl font-bold  md:text-5xl">
            About Job Freak 👋,
            <br />
          </p>
          <div className=" space-y-4 ">
            <p className=" p-2 mt-4  font-semibold  rounded-full text-center  hover:underline bg-violet-600 text-gray-50 ">
              # At Job Freak We Post daily updates on internships and jobs
              postings ! !
            </p>
            <p className="font-semibold text-justify">
              Our aim is to empower the youth of our country and make them
              Self-dependent. By providing them job/internships all kinds of
              opportunities from various sectors, sharing knowledge and make
              them competent enough so that they could excel in any field. If
              you have any query regrading Site, Advertisement and any other
              issue, please feel free to contact at our email jobfreak@gmail.com
            </p>
          </div>
          <div className="flex flex-wrap justify-center py-6 space-x-2 "></div>

          <AnimatedBackground />
        </div>
      </div>
    </>
  );
};

export default About;
