import React from "react";
import gallery from "../assets/gallery.png";
import paytm from "../assets/paytm.png";
import shop from "../assets/shop.png";
import { AiOutlineHtml5 } from "react-icons/ai";
import {  FaDocker, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiCloudinary, SiExpress, SiMongodb,  SiNpm, SiRecoil, SiRedux, SiTurborepo } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";


const Projects = () => {
  const projectData = [
    {
      title: "My shop",
      type: "E Commerce app",
      image: shop,
      description: `A fullstack application that enables users to browse products add to card and 
      make orders. UI is fully responsive across different devices and made with React
       and tailwind. A Simple backend made with express,Postgresql and Prisma. `,
      technologies: [
        {
          title: "React",
          logo: <FaReact />,
        },

        {
          title: "Recoil",
          logo: <SiRecoil/>
        },
        {
          title: "tailwind",
          logo: <AiOutlineHtml5 />,
        },
        {
          title: "Nodejs",
          logo: <FaNodeJs />,
        },
        {
          title: "Typescript",
          logo: <TbBrandTypescript />,
        },
        {
          title: "Express",
          logo: <SiExpress />,
        },
        {
          title: "Postgresql",
          logo: <BiLogoPostgresql />,
        },
        {
          title: "Prisma",
          logo: <SiCloudinary />,
        },
        {
          title: "Cloudinary",
          logo: <SiCloudinary />,
        },
        {
          title: "NPM",
          logo: <SiNpm />,
        },
        {
          title: "Git",
          logo: <FaGithub />,
        },
      ],
      sourceCode: "https://github.com/Nitish490388/Ecomm",
      demo: "https://youtu.be/PzT67C-oJ5A",
    },
    {
      title: "R and G's wedding fiesta",
      type: "Gallery app",
      image: gallery,
      description: `A responsive and dynamic web application keeping images taken in 
      a specific family event in one place and allows family members to create their account and
      share images. It is created using mern stack.`,
      technologies: [
        {
          title: "React", 
          logo: <FaReact />,
        },
        {
          title: "Redux-toolkit",
          logo: <SiRedux/>
        },
        {
          title: "tailwind",
          logo: <AiOutlineHtml5 />,
        },
        {
          title: "Nodejs",
          logo: <FaNodeJs />,
        },
        {
          title: "Express",
          logo: <SiExpress />,
        },
        {
          title: "MongoDB",
          logo: <SiMongodb />,
        },
        {
          title: "Cloudinary",
          logo: <SiCloudinary />,
        },
        {
          title: "NPM",
          logo: <SiNpm />,
        },
        {
          title: "Git",
          logo: <FaGithub />,
        },
      ],
      sourceCode: "https://github.com/Nitish490388?tab=repositories",
      demo: "https://www.youtube.com/watch?v=N1TF1LW5AwU",
    },
    {
      title: "PayTM",
      type: "Payment app",
      image: paytm,
      description: `Developed a payment application similar to Paytm, enabling users 
      to create accounts, add money from their bank, and make secure payments via phone 
      numbers. Implemented seamless transactions, balance withdrawals,
       and webhook handling for bank transfers. Utilized Next.js, Prisma,
       Postgres, and Tailwind with Turborepo for shared database and UI components.`,
      technologies: [
        {
          title: "Next.js",
          logo: <FaReact />,
        },
        {
          title: "Recoil",
          logo: <SiRecoil/>
        },
        {
          title: "tailwind",
          logo: <AiOutlineHtml5 />,
        },
        {
          title: "Typescript",
          logo: <TbBrandTypescript />,
        },
        {
          title: "Express",
          logo: <SiExpress />,
        },
        {
          title: "Postgresql",
          logo: <BiLogoPostgresql />,
        },
        {
          title: "Prisma",
          logo: <SiCloudinary />,
        },
        {
          title: "Turborepo",
          logo: <SiTurborepo />,
        },
        {
          title: "NPM",
          logo: <SiNpm />,
        },
        {
          title: "Git",
          logo: <FaGithub />,
        },
        {
          title: "Docker",
          logo: <FaDocker />,
        },
      ],
      sourceCode: "https://github.com/Nitish490388/pay-tm",
      demo: "https://youtu.be/PTek-tpWFZY",
    },
  ];

  return (
    <section id="projects" className="w-full">
      <h2 className="first-letter:text-yellow-500 text-center text-4xl m-20">
        My Projects
      </h2>
      <div className="w-[90%] mx-auto flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-10 md:gap-4">
        {projectData.map((itme, index) => (
          <div
            key={index}
            className="flex-1 w-[90vw] md:min-w-[500px] md:max-w-[600px]  bg-neutral-800 rounded-xl outline outline-neutral-500 flex flex-col items-center justify-center min-h-[700px]"
          >
            <div className="w-[95%] aspect-video rounded-xl overflow-hidden mt-2">
              <img
                src={itme.image}
                alt="project image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full px-5 py-3 space-y-3">
              <h2 className="text-3xl font-bold text-orange-800">
                {itme.title}
              </h2>
              <h3 className="text-2xl font-bold text-orange-500 opacity-50">
                {itme.type}
              </h3>
              <p className="text-neutral-400 leading-4 text-lg">
                {itme.description}
              </p>
              <h3 className="text-orange-600">Technologies:</h3>
              <div className="border border-orange-700"></div>
              <div className="w-full flex flex-wrap items-center justify-center gap-2">
                {itme.technologies?.map((tech, index) => (
                  <div key={index}>
                    <div className="px-1 py-1 flex items-center justify-center gap-2 rounded-xl bg-neutral-300 text-orange-800">
                      <span className="">{tech.title}</span>
                      <span className="">{tech.logo}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-orange-700"></div>
              <div className="flex items-center justify-center gap-3">
                <button
                  className="outline outline-orange-800 rounded-md px-4 py-1"
                  onClick={() => {
                    console.log(itme.title);
                    window.open(itme.demo, "_blank");
                  }}
                >
                  View Demo
                </button>
                <button
                  className="outline outline-neutral-400 rounded-md px-4 py-1"
                  onClick={() => {
                    // console.log(itme.title);
                    window.open(itme.sourceCode, "_blank");
                  }}
                >
                  Source Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-24 w-full"></div>
    </section>
  );
};

export default Projects;
