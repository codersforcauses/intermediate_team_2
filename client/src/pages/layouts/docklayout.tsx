import { Bell, Home, Mail, User } from "lucide-react";
import Link from "next/link";

// this layout takes a children prop and bottomoverlay
// whichever page uses DockLayout can **OPTIONALLY** declare an element to sit above the NAV bar

type DockLayoutProps = {
  children: React.ReactNode;
  bottomOverlay?: React.ReactNode;
};

export default function DockLayout({
  children,
  bottomOverlay,
}: DockLayoutProps) {
  return (
    <>
      <main className="pb-24">{children}</main>

      {bottomOverlay && (
        <div className="fixed bottom-20 left-0 right-0 z-40 px-4">
          {bottomOverlay}
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-md px-4 pb-3">
          <div className="flex items-center justify-around rounded-full bg-[#000912] px-6 py-4 shadow-lg">
            <Link href="/home" className="text-gray-300 hover:text-white">
              <Home className="h-6 w-6" />
            </Link>

            <Link href="/messages" className="text-gray-300 hover:text-white">
              <Mail className="h-6 w-6" />
            </Link>

            <Link href="/profile" className="text-gray-300 hover:text-white">
              <User className="h-6 w-6" />
            </Link>

            <Link
              href="/notifications"
              className="text-gray-300 hover:text-white"
            >
              <Bell className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
