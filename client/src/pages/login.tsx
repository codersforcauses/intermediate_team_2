import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import api from "@/lib/api";
import { clearTokens, setTokens } from "@/lib/auth";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //function to return JWT
  const login = async (username: string, password: string) => {
    clearTokens();
    const res = await api.post("/token/", {
      username,
      password,
    });
    const { access, refresh } = res.data;
    setTokens(access, refresh);

    // once logged in, get user role and redirect to appropriate page
    const userResponse = await api.get("/user/me/");
    const userRole = userResponse.data.profile.role;

    switch (userRole) {
      case "manager":
        router.push("manager/dashboard");
        break;
      case "user":
        router.push("/home");
        break;
      default:
        router.push("/home");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <Link href={"/register"}>
            <Button variant="link">Sign Up</Button>
          </Link>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Input
                  id="username"
                  type="username"
                  placeholder="user-name"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full"
            onClick={() => login(username, password)}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
