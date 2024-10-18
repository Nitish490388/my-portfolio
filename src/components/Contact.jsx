import React from "react";
import { FaGithub, FaLinkedin, FaRetweet, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-[90%] h-[200px] mx-auto bg-orange-950 rounded-t-2xl flex flex-col md:flex-row"
    >
      <div className="flex-1 flex items-center justify-evenly md:justify-center md:gap-6">
        <div className="flex items-center justify-center rounded-full p-3 bg-neutral-400 " onClick={() => {
          window.open("https://www.linkedin.com/in/nitish-kumar-jena-a93412218/", "_blank");
        }}>
          <FaLinkedin className="text-orange-600 text-3xl" />
        </div>
        <div className="flex items-center justify-center rounded-full p-3 bg-neutral-400 " onClick={() => {
          window.open("https://www.linkedin.com/in/nitish-kumar-jena-a93412218/", "_blank");
        }}>
          <FaGithub className="text-orange-600 text-3xl" />
        </div>
        <div className="flex items-center justify-center rounded-full p-3 bg-neutral-400 " onClick={() => {
          window.open("https://wa.me/qr/JR5TEIO77SXWB1", "_blank");
        }}>
          <FaWhatsapp className="text-orange-600 text-3xl" />
        </div>
        <div className="flex items-center justify-center rounded-full p-3 bg-neutral-400 " onClick={() => {
          window.open("https://x.com/_Nit_ish_", "_blank");
        }}>
          <FaRetweet className="text-orange-600 text-3xl" />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-3 items-center justify-center">
        <a
          href="mailto:jenanitish490@gmail.com"
          className="font-bold text-2xl text-neutral-500 underline"
        >
          jenanitish490@gmail.com
        </a>
        <div className="font-bold text-2xl text-neutral-500">+919861792516</div>
      </div>
    </div>
  );
};

export default Contact;
