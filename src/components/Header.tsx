import { Link } from "@tanstack/react-router";
import logo from "../logo.svg";

const HEADER_TITLE = "GitHub Copilot Demos";
const HEADER_HEIGHT = "h-16";

export const Header = () => {
  return (
    <header
      className={`bg-[#282c34] text-white ${HEADER_HEIGHT} flex items-center justify-between px-4 shadow-md`}
    >
      <Link to="/">
        <div className="flex items-center">
          <img
            src={logo}
            className="h-8 mr-3 pointer-events-none animate-[spin_20s_linear_infinite]"
            alt="logo"
          />
          <h1 className="text-xl font-bold">{HEADER_TITLE}</h1>
        </div>
      </Link>
    </header>
  );
};
