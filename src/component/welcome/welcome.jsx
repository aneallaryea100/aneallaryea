import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Welcome() {
  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      id="welcome"
    >
      <div className="max-w-4xl w-full space-y-8 relative">
        <div className="text-center">
          <div
            className="animate-fade-in-up"
            style={{
              animationDuration: "0.7s",
              animationFillMode: "both",
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              <span className="text-indigo-600">Hello</span>{" "}
              <span
                role="img"
                aria-label="wave"
                className="wave inline-block animate-wave"
              >
                👋
              </span>
              ,<br />
              I'm <span className="text-indigo-600">Aneal Laryea</span>.
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              I'm a software engineer specializing in architecting scalable
              solutions that blend technical expertise with creative vision.
              Passionate about leveraging cutting-edge technologies to solve
              real-world problems.
            </p>
          </div>

          <div
            className="animate-fade-in-scale"
            style={{
              animationDuration: "0.5s",
              animationDelay: "0.3s",
              animationFillMode: "both",
            }}
          >
            <a
              href="mailto:aneallaryea100@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 group"
            >
              Let's Talk
              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
