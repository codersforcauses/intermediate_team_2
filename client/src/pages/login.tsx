import { useRouter } from "next/router";
import { useState } from "react";

import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:8000/api/user/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        login(data.access, data.refresh);
        router.push("/");
      } else {
        setMessage(data.detail || "Login failed");
      }
    } catch (error) {
      // Temporary fix to commit
      const x = error;
      console.log(x);
      setMessage("Login failed. Please try again");
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-md p-4">
        <h1 className="mb-4 text-2xl font-bold">Login</h1>
        {message && <p className="mb-2 text-red-500">{message}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="border p-2"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border p-2"
            required
          />
          <button
            type="submit"
            className="mt-2 rounded bg-green-500 p-2 text-white"
          >
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
}
