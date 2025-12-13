import { Bell,Home, Mail, User } from "lucide-react";
import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="pb-24">{children}</main>

      <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-8 rounded-full bg-[#000912] px-8 py-4 shadow-lg">
          <Link href="/" className="text-gray-300 hover:text-white">
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
      </nav>
    </>
  );
}
