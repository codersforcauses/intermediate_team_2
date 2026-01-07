import Navbar from "@/components/ui/Navbar";

type LayoutProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 p-4">{children}</main>
      <footer className="bg-gray-200 p-4 text-center">© 2026 My App</footer>
    </div>
  );
}
