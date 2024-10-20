import React from "react";
import img from "../assets/picture.jpg";
import { Typewriter } from 'react-simple-typewriter';

const Header = () => {

  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1cee58VVJWsYb2p9B2X5CYwDj77VJ3J7k/view?usp=drivesdk", "_blank");
  };

  return (
    <section className="w-full overflow-hidden mt-28 flex flex-col-reverse items-center gap-10 md:flex-row justify-evenly ">

      <div className="w-full p-4 md:w-[600px] flex flex-col gap-1 md:gap-4 font-sans">
        <h2 className="text-3xl font-semibold">Hello, I am</h2>
        <h1 className="text-[35px] md:text-5xl font-extrabold first-letter:text-orange-600">Nitish Kumar Jena</h1>
        <div className="h-[100px] md:h-12">
        <h1 style={{ fontWeight: 'bold', fontSize: '30px' }}>
          I am a {' '}
          <span style={{ color: 'orange', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Full Stack Developer']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </span>
        </h1>
        </div>
        <p className="text-md">As a full stack Developer. I possess a strong arsenal of skills
          in ReactJS, NodeJS, MongoDB, Javascript, CSS and HTML.
          My expertise lies in crafting dynamic and engaging ways
          to build an application from scratch.</p>
          <div className="w-full ">
          <button className="mt-2 font-bold outline outline-orange-700 py-2 px-4 rounded-lg " onClick={handleDownload}>Download CV</button>
          </div>
      </div>

      

      <div className="h-[300px] w-[300px] rounded-full overflow-hidden">
        <img src={img} alt="image" className="h-full w-full object-cover" />
      </div>



    </section>
  );
};

export default Header;
