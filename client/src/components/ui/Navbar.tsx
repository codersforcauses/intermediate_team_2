import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="flex justify-between bg-gray-200 p-4">
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/chat">Chat</Link>
      </div>

      <div className="flex gap-4">
        {isLoggedIn ? (
          <>
            <button onClick={logout} className="text-red-500">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
