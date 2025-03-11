import { Link } from "@tanstack/react-router";
import logo from "../../copilot.png";

const HEADER_TITLE = "GitHub Copilot Demos";

export const Header = () => {
  return (
    <header
      className={`bg-[#282c34] text-white h-16 flex items-center justify-between px-4 shadow-md`}
    >
      <Link to="/">
        <div className="flex items-center">
          <img src={logo} className="h-8 mr-3 pointer-events-none" alt="logo" />
          <h1 className="text-xl font-bold">{HEADER_TITLE}</h1>
        </div>
      </Link>
    </header>
  );
};
