import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaAws, FaCode, FaCss3Alt, FaDocker, FaGithub, FaJava, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import SingleSkill from "./SingleSkill";
import { SiExpress, SiMongodb, SiNetlify, SiNpm, SiPostman, SiPrisma, SiShadcnui, SiSocketdotio, SiTurborepo } from "react-icons/si";
import { GoTools } from "react-icons/go";
import { BsCodeSlash } from "react-icons/bs";
import { IoIosGitBranch } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";

const Skills = () => {

  const frontendSkills = [
    {
      title: "HTML",
      logo: <AiOutlineHtml5/>
    },
    {
      title: "CSS",
      logo: <FaCss3Alt />
    },
    {
      title: "Javascript",
      logo: <FaJs />
    },
    {
      title: "tailwind",
      logo: <AiOutlineHtml5/>
    },
    {
      title: "Shadcn",
      logo: <SiShadcnui/>

    },
    {
      title: "React",
      logo: <FaReact />
    },
    {
      title: "Nextjs",
      logo: <FaReact />
    },
  ]

  const backendSkills = [
    {
      title: "Nodejs",
      logo: <FaNodeJs/>
    },
    {
      title: "Java",
      logo: <FaJava/>
    },
    {
      title: "Express",
      logo: <SiExpress />
    },
    {
      title: "Postgresql",
      logo: <BiLogoPostgresql />
    },
    {
      title: "Prisma",
      logo: <SiPrisma/>
    },
    {
      title: "MongoDB",
      logo: <SiMongodb/>

    },
    {
      title: "Redis",
      logo: <DiRedis />
    },
    {
      title: "Websocket",
      logo: <SiSocketdotio />
    },
  ]

  const OtherSkills = [
    {
      title: "Visual studio",
      logo: <FaCode/>
    },
    {
      title: "Postman",
      logo: <SiPostman />
    },
    {
      title: "Git",
      logo: <FaGithub />
    },
    {
      title: "Docker",
      logo: <FaDocker/>
    },
    {
      title: "Aws",
      logo: <FaAws/>

    },
    {
      title: "Turborepo",
      logo: <SiTurborepo />
    },
    {
      title: "Netlify",
      logo: <SiNetlify />
    },
    {
      title: "NPM",
      logo: <SiNpm />
    },
  ]

  return (
    <section id="skills" className="">
      <h2 className="first-letter:text-yellow-500 text-center text-4xl m-20">
        My skills
      </h2>

      <div className="flex items-center flex-col gap-10 md:flex-row">
        <div className="flex-1 ">
          <div className="flex items-center flex-col justify-center gap-5 ">
            <div className="flex items-center justify-center rounded-full p-5 bg-neutral-800 ">
              <BsCodeSlash  className="text-orange-600 text-5xl" /> 
            </div>
            <h3 className="font-bold text-2xl tracking-wide">Frontend</h3>
            <div className="flex flex-wrap gap-2 w-[80%]">
            <div className="border border-orange-500 w-full mb-8"></div>
              {
                frontendSkills.map((item, index) => (
                 
                    <SingleSkill title={item.title} icon={item.logo} key={index}/>
                  
                ))
              }
            </div>
          </div>
        </div>
        <div className="flex-1 my-2  ">
          <div className="flex items-center flex-col justify-center gap-5 ">
            <div className="flex items-center justify-center rounded-full p-5 bg-neutral-800 ">
              <GoTools className="text-orange-600 text-5xl" />
            </div>
            <h3 className="font-bold text-2xl tracking-wide">Backend</h3>
            <div className="flex flex-wrap gap-2 w-[80%]">
            <div className="border border-orange-500 w-full mb-8"></div>
              {
                backendSkills.map((item, index) => (
                 
                    <SingleSkill title={item.title} icon={item.logo} key={index}/>
                  
                ))
              }
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center flex-col justify-center gap-5  ">
            <div className="flex items-center justify-center rounded-full p-5 bg-neutral-800 ">
              <IoIosGitBranch className="text-orange-600 text-5xl" />
            </div>
            <h3 className="font-bold text-2xl tracking-wide">Others</h3>
            <div className="flex flex-wrap gap-2 w-[80%]">
            <div className="border border-orange-500 w-full mb-8"></div>
              {
                OtherSkills.map((item, index) => (
                 
                    <SingleSkill title={item.title} icon={item.logo} key={index}/>
                  
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[100px]"></div>
    </section>
  );
};

export default Skills;
