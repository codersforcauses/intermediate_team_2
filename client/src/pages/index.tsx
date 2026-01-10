import {
  ArrowRight,
  Calendar,
  Heart,
  Home,
  Info,
  LogIn,
  Mail,
  MessageCircle,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

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
    blue: "bg-blue-100",
    red: "bg-pink-100",
    purple: "bg-purple-100",
    yellow: "bg-yellow-100",
    green: "bg-green-100",
    orange: "bg-orange-100",
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

      {/* welcome section */}
      <section
        id="welcome"
        className={`container mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-12 md:py-20`}
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

          {/* buttons */}
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

      {/* about section */}
      <section
        id="about"
        className="container mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-20"
      >
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2
              className={`text-3xl font-bold md:text-5xl ${COLORS.text.primary} mb-6`}
            >
              Walking into a room full of strangers is scary
            </h2>
            <p
              className={`text-lg ${COLORS.text.secondary} mb-4 leading-relaxed`}
            >
              {
                "We know the feeling. You're excited about a club event, workshop, or social gathering, but the thought of going alone stops you."
              }
            </p>
            <p className={`text-lg font-semibold ${COLORS.text.primary} mb-4`}>
              {"You're not alone in feeling alone."}
            </p>
            <p className={`text-lg ${COLORS.text.secondary} leading-relaxed`}>
              Many university students miss out on amazing experiences and
              opportunities simply because attending events alone is too nerve
              wrecking.
            </p>
          </div>

          <Card className={`${COLORS.border.default} shadow-lg`}>
            <CardHeader>
              <CardTitle className={`text-2xl ${COLORS.text.primary}`}>
                Our Solution
              </CardTitle>
            </CardHeader>
            <CardContent
              className={`space-y-4 ${COLORS.text.secondary} leading-relaxed`}
            >
              <p className={`font-semibold ${COLORS.text.primary}`}>
                UniConnect helps by bridging the gap between wanting to
                participate and having the confidence to go.
              </p>
              <p>
                {
                  "We've created a platform that lets you discover attendees with similar interests as you before the event even begins. By matching you with students who share your interests, hobbies, and personality traits, we transform the nerve wracking experience of going alone into the excitement of meeting new friends that you've already connected with through this app."
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What the app does */}
      <section
        id="how"
        className="container mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-12 md:py-20"
      >
        <div className="mb-12 text-center">
          <h2
            className={`text-4xl font-bold md:text-5xl ${COLORS.text.primary} mb-4`}
          >
            How It Works
          </h2>
          <p className={`text-xl ${COLORS.text.secondary}`}>
            Six simple steps to never feel alone at events again
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              step: "1",
              title: "Create Your Profile",
              description:
                "Add tags to your profile that describe you. Are you introverted or outgoing? Into photography or gaming?",
              icon: Users,
              color: COLORS.badge.red,
            },
            {
              step: "2",
              title: "Define What You're Looking For",
              description:
                "Not just who you are, but who you want to meet. Looking for someone extroverted to balance your introvertness?",
              icon: Heart,
              color: COLORS.badge.purple,
            },
            {
              step: "3",
              title: "Discover Events",
              description:
                "Browse university club events, workshops, and socials. Filter by your interests.",
              icon: Calendar,
              color: COLORS.badge.blue,
            },
            {
              step: "4",
              title: "See Who's Going",
              description:
                "View other attendees and see your compatibility based on shared interests.",
              icon: Sparkles,
              color: COLORS.badge.green,
            },
            {
              step: "5",
              title: "Connect Before You Go",
              // Not sure if we are still using chat or questions
              description:
                "Send connection requests, make brief introductions, and plan to meet up.",
              icon: MessageCircle,
              color: COLORS.badge.yellow,
            },
            {
              step: "6",
              title: "Show Up With Confidence",
              description:
                "Walk in knowing exactly who to look for. No more awkward hovering. You've got this.",
              icon: TrendingUp,
              color: COLORS.badge.orange,
            },
          ].map((item, index) => (
            <Card
              key={index}
              className={`${COLORS.border.default} shadow-md ${COLORS.interactive.cardHover} transition-shadow duration-300`}
            >
              <CardHeader>
                <div className="mb-3 flex items-center gap-3">
                  <Badge
                    className={`${item.color} ${COLORS.text.primary} pointer-events-none flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold`}
                  >
                    {item.step}
                  </Badge>
                  <item.icon className={`h-6 w-6 ${COLORS.icon.default}`} />
                </div>
                <CardTitle className={`text-xl ${COLORS.text.primary}`}>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`${COLORS.text.secondary} leading-relaxed`}>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* why this app section */}
      <section
        id="why"
        className="container mx-auto min-h-screen max-w-6xl px-4 py-12 md:py-20"
      >
        <div className="mb-12 text-center">
          <h2
            className={`text-4xl font-bold md:text-5xl ${COLORS.text.primary} mb-4`}
          >
            Why UniConnect?
          </h2>
          <p className={`text-xl ${COLORS.text.secondary}`}>
            Benefits for everyone in the university community
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {/* Student card */}
          <Card className={`${COLORS.border.default} shadow-lg`}>
            <CardHeader className={COLORS.background.cardHeader}>
              <CardTitle
                className={`text-3xl ${COLORS.text.primary} flex items-center gap-3`}
              >
                <Users className="h-8 w-8" />
                For Students
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <h4
                  className={`text-lg font-bold ${COLORS.text.primary} mb-2 flex items-center gap-2`}
                >
                  <div
                    className={`h-2 w-2 ${COLORS.decoration.bullet} rounded-full`}
                  ></div>
                  Build Genuine Friendships
                </h4>
                <p className={`${COLORS.text.secondary} ml-4 leading-relaxed`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h4
                  className={`text-lg font-bold ${COLORS.text.primary} mb-2 flex items-center gap-2`}
                >
                  <div
                    className={`h-2 w-2 ${COLORS.decoration.bullet} rounded-full`}
                  ></div>
                  Reduce Social Anxiety at Events
                </h4>
                <p className={`${COLORS.text.secondary} ml-4 leading-relaxed`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h4
                  className={`text-lg font-bold ${COLORS.text.primary} mb-2 flex items-center gap-2`}
                >
                  <div
                    className={`h-2 w-2 ${COLORS.decoration.bullet} rounded-full`}
                  ></div>
                  Discover your community
                </h4>
                <p className={`${COLORS.text.secondary} ml-4 leading-relaxed`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h4
                  className={`text-lg font-bold ${COLORS.text.primary} mb-2 flex items-center gap-2`}
                >
                  <div
                    className={`h-2 w-2 ${COLORS.decoration.bullet} rounded-full`}
                  ></div>
                  Make the Most of Events
                </h4>
                <p className={`${COLORS.text.secondary} ml-4 leading-relaxed`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Events card */}
          <Card className={`${COLORS.border.default} shadow-lg`}>
            <CardHeader className={COLORS.background.cardHeader}>
              <CardTitle
                className={`text-3xl ${COLORS.text.primary} flex items-center gap-3`}
              >
                <Users className="h-8 w-8" />
                For Event Organisers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <h4
                  className={`text-lg font-bold ${COLORS.text.primary} mb-2 flex items-center gap-2`}
                >
                  <div
                    className={`h-2 w-2 ${COLORS.decoration.bullet} rounded-full`}
                  ></div>
                  Build Genuine Friendships
                </h4>
                <p className={`${COLORS.text.secondary} ml-4 leading-relaxed`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h4
                  className={`text-lg font-bold ${COLORS.text.primary} mb-2 flex items-center gap-2`}
                >
                  <div
                    className={`h-2 w-2 ${COLORS.decoration.bullet} rounded-full`}
                  ></div>
                  Reduce Social Anxiety at Events
                </h4>
                <p className={`${COLORS.text.secondary} ml-4 leading-relaxed`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h4
                  className={`text-lg font-bold ${COLORS.text.primary} mb-2 flex items-center gap-2`}
                >
                  <div
                    className={`h-2 w-2 ${COLORS.decoration.bullet} rounded-full`}
                  ></div>
                  Discover your community
                </h4>
                <p className={`${COLORS.text.secondary} ml-4 leading-relaxed`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h4
                  className={`text-lg font-bold ${COLORS.text.primary} mb-2 flex items-center gap-2`}
                >
                  <div
                    className={`h-2 w-2 ${COLORS.decoration.bullet} rounded-full`}
                  ></div>
                  Make the Most of Events
                </h4>
                <p className={`${COLORS.text.secondary} ml-4 leading-relaxed`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Smaller cards */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            {
              title: "Inclusivity",
              icon: Users,
              desc: "Lorem ipsum dolor sit amet",
            },
            {
              title: "Authenticity",
              icon: Heart,
              desc: "Lorem ipsum dolor sit amet",
            },
            {
              title: "Privacy & Safety",
              icon: Shield,
              desc: "Lorem ipsum dolor sit amet",
            },
            {
              title: "Community",
              icon: Sparkles,
              desc: "Lorem ipsum dolor sit amet",
            },
          ].map((value, index) => (
            <Card
              key={index}
              className={`${COLORS.border.default} text-center ${COLORS.interactive.cardHover} transition-shadow`}
            >
              <CardContent className="pt-6">
                <div
                  className={`h-14 w-14 ${COLORS.decoration.iconBg} mx-auto mb-3 flex items-center justify-center rounded-full`}
                >
                  <value.icon className={`h-7 w-7 ${COLORS.icon.nav}`} />
                </div>
                <h4 className={`font-bold ${COLORS.text.primary} mb-1`}>
                  {value.title}
                </h4>
                <p className={`text-sm ${COLORS.text.secondary}`}>
                  {value.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section
        id="login"
        className="container mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-20"
      >
        {/* <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold ${COLORS.text.primary} mb-4`}>
            Ready to Get Started?
          </h2>
          <p className={`text-xl ${COLORS.text.secondary}`}>
            Join thousands of students who've found their community through UniConnect
          </p>
        </div> */}

        <Card
          className={`mx-auto min-h-[700px] w-full max-w-2xl ${COLORS.border.default} flex flex-col justify-center shadow-2xl`}
        >
          <CardHeader className="pb-8 text-center">
            <CardTitle
              className={`text-4xl font-bold md:text-5xl ${COLORS.text.primary} mb-4`}
            >
              Ready to Get Started?
            </CardTitle>
            <p className={`text-lg ${COLORS.text.secondary}`}>
              Find your own community through UniConnect
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  className={`text-sm font-medium ${COLORS.text.primary} mb-2 block`}
                >
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your.email@university.edu"
                  className={COLORS.border.input}
                />
              </div>
              <div>
                <label
                  className={`text-sm font-medium ${COLORS.text.primary} mb-2 block`}
                >
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Create a secure password"
                  className={COLORS.border.input}
                />
              </div>
            </div>

            <Button
              size="lg"
              className={`w-full ${COLORS.button.primary} ${COLORS.button.primaryHover} ${COLORS.text.white} py-6 text-lg`}
            >
              Sign In
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span
                  className={`w-full border-t ${COLORS.border.separator}`}
                />
              </div>
              <div className="relative flex justify-center text-sm">
                <span
                  className={`${COLORS.background.card} px-4 ${COLORS.text.tertiary}`}
                >
                  or
                </span>
              </div>
            </div>

            <Button
              size="lg"
              variant="outline"
              className={`w-full ${COLORS.button.outline} py-6 text-lg`}
            >
              Create Account
            </Button>

            {/* Placeholder, there is no link rn */}
            <p className={`text-center text-sm ${COLORS.text.tertiary}`}>
              By signing up, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </CardContent>
        </Card>
      </section>
      <section
        id="contact"
        className="container mx-auto min-h-screen max-w-6xl px-4 py-12 md:py-20"
      >
        <div className="mb-12 text-center">
          <h2
            className={`text-4xl font-bold md:text-5xl ${COLORS.text.primary} mb-4`}
          >
            Get in Touch
          </h2>
          <p className={`text-xl ${COLORS.text.secondary}`}>
            {
              "Have questions? Want to partner with us? We'd love to hear from you."
            }
          </p>
        </div>
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "gen",
              email: "generalenquiries@gmail.com",
              desc: "General Inquiries",
              icon: Mail,
            },
            {
              title: "stu",
              email: "studentenquiries@gmail.com",
              desc: "Student Inquiries",
              icon: Users,
            },
            {
              title: "org",
              email: "organiserenquiries@gmail.com",
              desc: "Event Organiser Inquiries",
              icon: Star,
            },
          ].map((value, index) => (
            <Card
              key={index}
              className={`${COLORS.border.default} text-center ${COLORS.interactive.cardHover} transition-shadow`}
            >
              <CardContent className="pt-6">
                <value.icon
                  className={`h-12 w-12 ${COLORS.icon.nav} mx-auto mb-4`}
                />
                <h4 className={`font-bold ${COLORS.text.primary} mb-2`}>
                  {value.desc}
                </h4>
                <a
                  href="mailto:hello@uniconnect.app"
                  className={`${COLORS.text.secondary} ${COLORS.interactive.linkHover}`}
                >
                  {value.email}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
