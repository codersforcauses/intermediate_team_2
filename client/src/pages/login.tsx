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
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //function to return JWT
  const handleLogin = async () => {
    try {
      const res = await api.post("/user/login/", {
        username,
        password,
      });
      const { access, refresh } = res.data;
      login(access, refresh);

      // redirect based on role
      const me = await api.get("/user/me/");
      const role = me.data.profile.role;
      router.push(role === "manager" ? "/manager/dashboard" : "/home");
    } catch (err) {
      console.log(err);
      setMessage("Login failed. Please check your credentials.");
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
          {message && (
            <p className="mb-4 text-center text-sm text-muted-foreground">
              {message}
            </p>
          )}
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
          <Button type="submit" className="w-full" onClick={handleLogin}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
