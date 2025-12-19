import { Home, Info, LogIn, Mail,Star, Workflow } from "lucide-react";
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-6 rounded-full bg-[#000912] px-8 py-4 text-sm shadow-lg">
          <a
            href="#welcome"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <Home className="h-5 w-5" />
            Welcome
          </a>

          <a
            href="#about"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <Info className="h-5 w-5" />
            About
          </a>

          <a
            href="#how"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <Workflow className="h-5 w-5" />
            How It Works
          </a>

          <a
            href="#why"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <Star className="h-5 w-5" />
            Why Us
          </a>

          <a
            href="#login"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <LogIn className="h-5 w-5" />
            Get Started
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <Mail className="h-5 w-5" />
            Contact
          </a>
        </div>
      </nav>

      <section
        id="welcome"
        className="container mx-auto min-h-screen max-w-6xl px-4 py-12 md:py-20"
      >
        Welcome
      </section>
      <section
        id="about"
        className="container mx-auto min-h-screen max-w-6xl px-4 py-12 md:py-20"
      >
        About
      </section>
      <section
        id="how"
        className="container mx-auto min-h-screen max-w-6xl px-4 py-12 md:py-20"
      >
        How It Works
      </section>
      <section
        id="why"
        className="container mx-auto min-h-screen max-w-6xl px-4 py-12 md:py-20"
      >
        Why APPNAME
      </section>
      <section
        id="login"
        className="container mx-auto min-h-screen max-w-6xl px-4 py-12 md:py-20"
      >
        Get Started (Login/ Signup)
      </section>
      <section
        id="contact"
        className="container mx-auto min-h-screen max-w-6xl px-4 py-12 md:py-20"
      >
        Contact Us
      </section>
    </div>
  );
}
