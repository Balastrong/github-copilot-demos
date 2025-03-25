import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "../../copilot.png";
import { COPILOT_FEATURES, DEMO_ROUTES } from "@/data";


export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="min-h-screen flex flex-col">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {DEMO_ROUTES.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all transform hover:-translate-y-1 flex flex-col items-center text-center border border-blue-100 relative overflow-hidden group"
            >
              <div className="text-4xl mb-3">{route.icon}</div>
              <h2 className="text-2xl font-bold mb-2 text-blue-700 group-hover:text-blue-800">
                {route.name}
              </h2>
              <p className="text-gray-700">{route.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 w-full max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Copilot Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COPILOT_FEATURES.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 rounded-lg p-5 border border-gray-200`}
              >
                <div className="flex items-start">
                  <span className="text-gray-600 text-xl mr-3">{feature.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documentation Link */}
        <div className="mt-12 text-center">
          <p className="mb-4">Learn more about using this demo repository</p>
          <a
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors inline-flex items-center"
            href="https://github.com/features/copilot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-2">GitHub Copilot Documentation</span>
            <span>→</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>Built with React, TanStack, and the assistance of Copilot</p>
      </footer>
    </div>
  );
}
