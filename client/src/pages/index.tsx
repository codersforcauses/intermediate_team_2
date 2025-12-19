import { Home, Info, LogIn, Mail, Star, Workflow } from "lucide-react";
import React from "react";

// literally just for UX, clicking on any navbar buttons will scroll to that section instead of jumping instantly to that section
const scrollTo = (id: string) => {
  // question mark makes function scrolls only if the id is valid (wihout it an invalid id will error react)
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function AboutPage() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-100">
      <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-6 rounded-full bg-[#000912] px-8 py-4 text-sm shadow-lg">
          <button
            onClick={() => scrollTo("welcome")}
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <Home className="h-4 w-4" />
            Welcome
          </button>

          <button
            onClick={() => scrollTo("about")}
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <Info className="h-4 w-4" />
            About
          </button>

          <button
            onClick={() => scrollTo("how")}
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <Workflow className="h-4 w-4" />
            How It Works
          </button>

          <button
            onClick={() => scrollTo("why")}
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <Star className="h-4 w-4" />
            Why Us
          </button>

          <button
            onClick={() => scrollTo("login")}
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <LogIn className="h-4 w-4" />
            Get Started
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            Contact
          </button>
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
