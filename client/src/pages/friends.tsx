import Link from "next/link";
import { useEffect, useState } from "react";

import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";

type Friend = {
  id: number;
  friend: number;
  friend_username: string;
};

export default function FriendsPage() {
  const { accessToken } = useAuth();
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    if (!accessToken) return;
    fetch("http://localhost:8000/api/chat/friends/", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setFriends(data);
      });
  }, [accessToken]);

  return (
    <Layout>
      <div className="mx-auto max-w-md p-4">
        <h1 className="mb-4 text-xl font-bold">Friends</h1>
        {friends.length === 0 && <p>You have no friends yet.</p>}
        <ul className="flex flex-col gap-2">
          {friends.map((f) => (
            <li key={f.id} className="rounded border p-2 hover:bg-gray-100">
              <Link href={`/chat/${f.friend}`}>{f.friend_username}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
