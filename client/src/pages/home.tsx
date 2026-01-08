import { useRouter } from "next/router";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import EventCard from "@/components/ui/event-card";
import { useAuth } from "@/context/AuthContext";
import { useEvents } from "@/hooks/events";
import { useMe } from "@/hooks/me";

import SearchDock from "../components/ui/search-dock";
import DockLayout from "./layouts/docklayout";

export default function Home() {
  const { data: events, isLoading: eventsLoading } = useEvents();
  const { logout } = useAuth();
  const router = useRouter();
  const { data: me, isLoading: meLoading } = useMe();

  if (me?.profile.role === "manager") {
    router.replace("/manager/dashboard");
    return null;
  }

  if (meLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading…
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    toast("Logged out successfully");
    router.push("/login");
  };

  return (
    <>
      <DockLayout bottomOverlay={<SearchDock></SearchDock>}>
        <div className="mx-auto max-w-7xl space-y-3 px-4 py-6">
          {me && (
            <div>
              <p>
                Hello {me.first_name} ({me.username} {me.profile.role})
              </p>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          )}
          {!eventsLoading &&
            events?.map((event) => (
              <EventCard key={event.id} event={event}></EventCard>
            ))}
        </div>
      </DockLayout>
    </>
  );
}
