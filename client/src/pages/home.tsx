import { useRouter } from "next/router";

import { Button } from "@/components/ui/button";
import EventCard from "@/components/ui/event-card";
import { useEvents } from "@/hooks/events";
import { useMe } from "@/hooks/me";
import { clearTokens } from "@/lib/auth";

import SearchDock from "../components/ui/search-dock";
import DockLayout from "./layouts/docklayout";

export default function Home() {
  const { data: events, isLoading } = useEvents();
  const { data: me } = useMe();
  const router = useRouter();

  const logout = () => {
    clearTokens();
    router.push("/login");
  };

  return (
    <>
      <DockLayout bottomOverlay={<SearchDock></SearchDock>}>
        <div className="mx-auto max-w-7xl space-y-3 px-4 py-6">
          {me && (
            <div>
              <p>
                Hello {me.first_name} ({me.username})
              </p>
              <Button onClick={logout}>Logout</Button>
            </div>
          )}
          {!isLoading &&
            events?.map((event) => (
              <EventCard key={event.id} event={event}></EventCard>
            ))}
        </div>
      </DockLayout>
    </>
  );
}
