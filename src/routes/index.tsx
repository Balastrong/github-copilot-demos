import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "../../copilot.png";

// Define constant values at the top of the file in UPPER_SNAKE_CASE as per instructions
const DEMO_ROUTES = [
  {
    path: "/board",
    name: "Board Demo",
    description: "Kanban board using Agent Mode",
  },
  {
    path: "/calculator",
    name: "Calculator Demo",
    description: "Calculator using Copilot Edits",
  },
  {
    path: "/calendar",
    name: "Calendar Demo",
    description: "Calendar with stacked events",
  },
] as const;

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#282c34] text-white">
      {/* Header Section */}
      <header className="flex flex-col items-center justify-center py-8">
        <div className="flex items-center mb-4">
          <img
            src={logo}
            className="h-[100px] pointer-events-none"
            alt="logo"
          />
          <h1 className="text-4xl font-bold ml-4">GitHub Copilot Demos</h1>
        </div>
        <p className="text-xl text-center max-w-2xl">
          A sandbox to experiment and showcase GitHub Copilot features
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center px-4 py-8">
        {/* Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {DEMO_ROUTES.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors flex flex-col items-center text-center"
            >
              <h2 className="text-2xl font-bold mb-2 text-[#61dafb]">
                {route.name}
              </h2>
              <p className="opacity-80">{route.description}</p>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Copilot Features
          </h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <ul className="list-disc pl-5 space-y-2">
              <li>Ghost Text - Code completion as you type</li>
              <li>Inline Chat - Get context and suggestions</li>
              <li>Chat Context - Attach context to your prompts</li>
              <li>Copilot Customization - Personalize your experience</li>
              <li>Copilot Edits - Let Copilot make changes across files</li>
              <li>Agent Mode - Complete complex tasks autonomously</li>
            </ul>
          </div>
        </div>

        {/* Documentation Link */}
        <div className="mt-8 text-center">
          <p className="mb-4">Learn more about using this demo repository</p>
          <a
            className="text-[#61dafb] hover:underline"
            href="https://github.com/features/copilot"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Copilot Documentation
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center opacity-70 text-sm">
        <p>Built with React, TanStack Router, and Tailwind CSS</p>
      </footer>
    </div>
  );
}
