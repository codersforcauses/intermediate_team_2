import { useState } from "react";

import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";

export default function AddFriend() {
  const { accessToken } = useAuth();
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleAdd = async () => {
    const res = await fetch("http://localhost:8000/api/chat/add_friend/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ username }),
    });
    const data = await res.json();
    setMessage(data.detail || "Error");
  };

  return (
    <Layout>
      <div className="mx-auto max-w-md p-4">
        <h1 className="mb-2 text-xl font-bold">Add Friend</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="mb-2 w-full border p-2"
        />
        <button
          onClick={handleAdd}
          className="w-full rounded bg-green-500 p-2 text-white"
        >
          Add Friend
        </button>
        {message && <p className="mt-2">{message}</p>}
      </div>
    </Layout>
  );
}
