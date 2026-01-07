import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";

export default function Chat() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return <p>Redirecting to login...</p>;
  return <Layout>This is the chat page</Layout>;
}
