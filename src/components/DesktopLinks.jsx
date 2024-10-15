import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function DesktopNavLinks() {
  return (
    <ul className="absolute right-0 flex flex-row space-x-6">
      <li className="btn-primary ">
        <Link href="/">Home</Link>
      </li>
      <li className="btn-primary ">
        <ScrollLink
          activeClass="active"
          to="about-me"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </ScrollLink>
      </li>
      <li className="btn-primary ">
        <Link href="/">Projects</Link>
      </li>
      <li className="btn-primary ">
      <ScrollLink
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Skills
        </ScrollLink>
      </li>
      <li className="btn-primary ">
        <Link href="/">Contacts</Link>
      </li>
    </ul>
  );
}

export default DesktopNavLinks;