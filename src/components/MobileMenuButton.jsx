import { CgMenuRightAlt } from "react-icons/cg";

function MobileMenuButton({ onClick }) {
  return (
    <button className="absolute right-2 top-2" onClick={onClick}>
      <CgMenuRightAlt className="text-orange-600 text-2xl" />
    </button>
  );
}

export default MobileMenuButton;