import React from "react";
import image1 from "../assets/image1.gif";

const AboutMe = () => {
  return (
    <section id="about-me" className="w-full overflow-hidden">
      <h2 className="first-letter:text-yellow-500 text-center text-4xl m-20">About Me</h2>
      <div className="flex flex-col md:flex-row md:justify-center gap-20 md:gap-3">
        <div>

          <div className="w-full md:w-[600px]">
            <img src={image1} alt="gif" />
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-r from-slate-900 to-slate-700 w-full md:w-[500px] p-10 text-center">
          <p className="font-thin">I graduated from Orissa Engineering College, Bhubaneswar in 2023 from Computer Science and Engineering Branch. I am a passionate Full Stack Developer with a strong foundation in the MERN stack.  As a
            full stack developer, I honed my skills by continuously learning different technologies and building real-world projects. With a proactive mindset and a blend of technical proficiency, problem-solving a
            cumen, and a passion for continuous learning, I am eager to contribute my skills and enthusiasm to dynamic projects and collaborative teams.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
