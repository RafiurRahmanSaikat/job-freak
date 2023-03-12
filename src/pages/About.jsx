import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";

const About = () => {
  return (
    <>
      <div class="bg-white flex  items-center justify-center w-screen ">
        <div>
          <h1 className="text-3xl font-bold  md:text-5xl">
            About   Job Freak 👋,<br />
          </h1>
          <p className="mt-4 font-semibold ">
            At Job Freak We Post daily updates on internships and jobs postings
            ! ! Our aim is to empower the youth of our country and make them
            Self-dependent. By providing them job/internships all kinds of
            opportunities from various sectors, sharing knowledge and make them
            competent enough so that they could excel in any field. If you have
            any query regrading Site, Advertisement and any other issue, please
            feel free to contact at our email jobfreak@gmail.com
          </p>
        <AnimatedBackground />  
        </div>

      </div>
    </>
  );
};

export default About;
