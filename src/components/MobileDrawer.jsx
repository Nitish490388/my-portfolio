import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RxCross1 } from "react-icons/rx";

function MobileDrawer({ isOpen, onClose }) {
  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-black text-neutral-100 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <div className="absolute right-7 top-4 h-6 w-6 bg-orange-600 rounded-full flex items-center justify-center hover:scale-125 ease-out transition-transform">
        <button className=" " onClick={onClose}>
          <RxCross1 className="text-black font-bold" />
        </button>
      </div>
      <ul className="flex flex-col justify-center items-center space-y-4">
        <li className="btn-primary text-3xl">
          <Link href="/">Home</Link>
        </li>
        <li className="btn-primary text-3xl">
          <Link href="/">About</Link>
        </li>
        <li className="btn-primary text-3xl">
          <Link href="/">Contact</Link>
        </li>
        <li className="btn-primary text-3xl">
          <Link href="/">Projects</Link>
        </li>
        {/* Add other navigation links */}
      </ul>
    </div>
  );
}

export default MobileDrawer;