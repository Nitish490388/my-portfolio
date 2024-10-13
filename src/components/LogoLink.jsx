import { Link } from "react-router-dom";
function LogoLink() {
  return (
    <div className="">
      <Link href="/">
        <div className="flex items-center gap-4">
          <h3 className="text-3xl font-extralight first-letter:text-orange-700 tracking-wider">Nitish</h3>
        </div>
      </Link>
    </div>
  );
}

export default LogoLink;