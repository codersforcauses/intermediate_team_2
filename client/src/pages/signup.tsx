import { useRouter } from "next/router";
import { useState } from "react";

import Layout from "@/components/Layout";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:8000/api/user/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        alert("Signup successful! Please log in.");
        router.push("/login");
      } else {
        setMessage(JSON.stringify(data));
      }
    } catch (error) {
      // Temporary fix to commit
      const x = error;
      console.log(x);
      setMessage("Signup failed. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-md p-4">
        <h1 className="mb-4 text-2xl font-bold">Sign Up</h1>
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
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2"
            required
          />
          <input
            name="first_name"
            placeholder="First Name"
            value={form.first_name}
            onChange={handleChange}
            className="border p-2"
          />
          <input
            name="last_name"
            placeholder="Last Name"
            value={form.last_name}
            onChange={handleChange}
            className="border p-2"
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
          <input
            name="password2"
            type="password"
            placeholder="Confirm Password"
            value={form.password2}
            onChange={handleChange}
            className="border p-2"
            required
          />
          <button
            type="submit"
            className="mt-2 rounded bg-blue-500 p-2 text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
    </Layout>
  );
}
