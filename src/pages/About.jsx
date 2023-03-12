import React from "react";

const About = () => {
  return (
    <section>
      <div className="absolute top-20 rounded-full bg-blue-400 left-[41vw] w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 "></div>
      <div className="absolute rounded-full bg-green-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 "></div>
      <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8  text-gray-900">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              Hi 👋, <br /> I'm Rafiur Rahman Saikat
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-600"></div>
          </div>
        </article>
        <div>
          <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed border-gray-600">
            <p className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-gray-50">
              #Web Developer
            </p>
            <p className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-gray-50">
              #React JS
            </p>
            <p className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-gray-50">
              #Full Stack Developer
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">About Myself</h4>
            <ul className="ml-4 space-y-1 list-disc">
              <li>
                I am a Web Developer. I Love programming and it is my passion .
              </li>
              <li>
                I have 6 months of experience in the web development sector.
                Here are some examples of my projects and skills.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
