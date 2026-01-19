import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";

export default function Chat() {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, isLoading, router]);

  if (isLoading) return <p>Loading...</p>;
  if (!isLoggedIn) return null;
  return <Layout>This is the chat page</Layout>;
}
