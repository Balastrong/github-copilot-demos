import { Link } from "@tanstack/react-router";
import logo from "../../copilot.png";
import { FaGithub } from "react-icons/fa";

const HEADER_TITLE = "GitHub Copilot Demos";
const GITHUB_REPO_URL = "https://github.com/balastrong/github-copilot-demos";

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
      <div className="flex items-center gap-3">
      <Link to="/instructions">
          <button className="cursor-pointer bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded transition-colors">
            Instructions
          </button>
        </Link>
        <a 
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="GitHub Repository"
        >
            <FaGithub 
            size={24}
            className="transition-transform hover:scale-110"
            />
        </a>

      </div>
    </header>
  );
};
