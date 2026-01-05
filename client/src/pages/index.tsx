import {
  ArrowRight,
  Home,
  Info,
  LogIn,
  Mail,
  Star,
  Workflow,
} from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Added this so that we can change colors more easily
const COLORS = {
  // Background colors
  background: {
    main: "bg-slate-100",
    card: "bg-white",
    cardHeader: "bg-gradient-to-br from-slate-50 to-slate-100",
    nav: "bg-[#000912]",
    footer: "bg-slate-800",
  },

  // Text colors
  text: {
    primary: "text-slate-800",
    secondary: "text-slate-600",
    tertiary: "text-slate-500",
    light: "text-gray-300",
    white: "text-white",
    navHover: "hover:text-white",
  },

  // Border colors
  border: {
    default: "border-slate-200",
    input: "border-slate-300",
    separator: "border-slate-300",
  },

  // Button colors
  button: {
    primary: "bg-slate-700",
    primaryHover: "hover:bg-slate-800",
    secondary: "bg-slate-200",
    secondaryHover: "hover:bg-slate-300",
    outline: "border-slate-300 text-slate-700 hover:bg-slate-100",
  },

  // Badge/Accent colors
  badge: {
    default: "bg-slate-200 text-slate-700",
    step1: "bg-blue-100",
    step2: "bg-pink-100",
    step3: "bg-purple-100",
    step4: "bg-yellow-100",
    step5: "bg-green-100",
    step6: "bg-orange-100",
  },

  // Icon colors
  icon: {
    default: "text-slate-600",
    nav: "text-slate-700",
  },

  // Interactive states
  interactive: {
    cardHover: "hover:shadow-lg",
    linkHover: "hover:text-slate-800",
  },

  // Decorative elements
  decoration: {
    bullet: "bg-slate-700",
    iconBg: "bg-slate-200",
  },
};

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
    <div className={`min-h-screen scroll-smooth ${COLORS.background.main}`}>
      {/* nav */}
      <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <div
          className={`flex items-center gap-6 rounded-full ${COLORS.background.nav} px-8 py-4 text-sm shadow-lg`}
        >
          <button
            onClick={() => scrollTo("welcome")}
            className={`flex items-center gap-2 ${COLORS.text.light} transition-colors ${COLORS.text.navHover}`}
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Welcome</span>
          </button>

          <button
            onClick={() => scrollTo("about")}
            className={`flex items-center gap-2 ${COLORS.text.light} transition-colors ${COLORS.text.navHover}`}
          >
            <Info className="h-4 w-4" />
            <span className="hidden sm:inline">About</span>
          </button>

          <button
            onClick={() => scrollTo("how")}
            className={`flex items-center gap-2 ${COLORS.text.light} transition-colors ${COLORS.text.navHover}`}
          >
            <Workflow className="h-4 w-4" />
            <span className="hidden sm:inline">How</span>
          </button>

          <button
            onClick={() => scrollTo("why")}
            className={`flex items-center gap-2 ${COLORS.text.light} transition-colors ${COLORS.text.navHover}`}
          >
            <Star className="h-4 w-4" />

            <span className="hidden sm:inline">Why</span>
          </button>

          <button
            onClick={() => scrollTo("login")}
            className={`flex items-center gap-2 ${COLORS.text.light} transition-colors ${COLORS.text.navHover}`}
          >
            <LogIn className="h-4 w-4" />
            <span className="hidden sm:inline">Start</span>
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className={`flex items-center gap-2 ${COLORS.text.light} transition-colors ${COLORS.text.navHover}`}
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Contact</span>
          </button>
        </div>
      </nav>

      <section
        id="welcome"
        className="container mx-auto min-h-screen max-w-6xl px-4 py-12 md:py-20"
      >
        <div className="space-y-8 text-center">
          {/* welcome pill */}
          <Badge
            variant="secondary"
            className={`${COLORS.badge.default} px-4 py-2 text-sm`}
          >
            Welcome to UniConnect
          </Badge>

          <h1
            className={`text-3xl font-bold sm:text-4xl md:text-6xl ${COLORS.text.primary} leading-tight`}
          >
            Never Attend an Event
            <br />
            <span className={COLORS.text.secondary}>Alone Again</span>
          </h1>
          <p
            className={`text-xl md:text-2xl ${COLORS.text.secondary} mx-auto max-w-3xl leading-relaxed`}
          >
            Connect with like-minded students before you arrive. Find your
            people, build new friendships, and make every event better.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4 sm:flex-row">
            <Button
              size="lg"
              className={`${COLORS.button.primary} ${COLORS.button.primaryHover} ${COLORS.text.white} px-6 py-4 text-lg sm:px-8 sm:py-6`}
              onClick={() => scrollTo("login")}
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={`${COLORS.button.outline} px-6 py-4 text-lg sm:px-8 sm:py-6`}
              onClick={() => scrollTo("about")}
            >
              Learn More
            </Button>
          </div>
        </div>
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
