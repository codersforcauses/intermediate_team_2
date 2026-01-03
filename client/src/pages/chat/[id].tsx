import { useRouter } from "next/router";
import { useEffect, useRef,useState } from "react";

import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";

type Message = {
  sender_id: number;
  sender_username: string;
  message: string;
};

export default function ChatPage() {
  const router = useRouter();
  const { id: friendId } = router.query;
  const { isLoggedIn, accessToken, userId } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const wsRef = useRef<WebSocket | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoggedIn) router.push("/login");
  }, [isLoggedIn, router]);

  useEffect(() => {
    if (!friendId || !accessToken) return;

    const ws = new WebSocket(`ws://localhost:8000/ws/chat/${friendId}/`);
    wsRef.current = ws;

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setMessages((prev) => [
        ...prev,
        {
          sender_id: data.sender_id,
          sender_username: data.sender_username,
          message: data.message,
        },
      ]);
    };

    ws.onclose = () => console.log("WebSocket disconnected");

    return () => ws.close();
  }, [friendId, accessToken]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    wsRef.current?.send(JSON.stringify({ message: newMessage }));
    setNewMessage("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!isLoggedIn) return <p>Redirecting...</p>;

  return (
    <Layout>
      <div className="mx-auto flex h-[80vh] max-w-lg flex-col p-4">
        <h1 className="mb-4 text-xl font-bold">Chat with User {friendId}</h1>
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto border p-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`rounded p-2 ${msg.sender_id === userId ? "self-end bg-blue-200" : "self-start bg-gray-200"}`}
            >
              <strong>{msg.sender_username}:</strong> {msg.message}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="mt-2 flex gap-2">
          <input
            className="flex-1 border p-2"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="rounded bg-green-500 p-2 text-white"
          >
            Send
          </button>
        </div>
      </div>
    </Layout>
  );
}
