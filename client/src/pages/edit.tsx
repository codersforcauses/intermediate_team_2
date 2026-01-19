import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useUserProfile } from "@/hooks/userprofile";
import api from "@/lib/api";

import Layout from "./layout";

export default function EditProfile() {
  const { data, isLoading } = useUserProfile();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    if (data) {
      setUsername(data.username);
      setEmail(data.email);
      setBio(data.profile.profile_info);
    }
  }, [data]);

  const handleSave = async () => {
    try {
      await api.patch(`/user/profile/${data.profile.id}/`, {
        profile_info: bio,
      }); // 只改profile info用patch，暂时****因为ProfileSerializer的fields = "__all__"要求全部字段，但目前user, role没有传
      alert("Profile updated!");
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <Layout>
      <div className="mx-auto mt-20 max-w-xl space-y-4">
        <h1 className="text-2xl font-bold">Edit Profile</h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div>
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded border p-2"
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border p-2"
              />
            </div>

            <div>
              <label>Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full rounded border p-2"
                rows={4}
              ></textarea>
            </div>

            <Button onClick={handleSave}>Save</Button>
          </>
        )}
      </div>
    </Layout>
  );
}
