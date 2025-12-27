import EventCard from "@/components/ui/event-card";
import { useEvents } from "@/hooks/events";

import SearchDock from "../components/ui/search-dock";
import DockLayout from "./layouts/docklayout";

export default function Home() {
  const { data: events, isLoading } = useEvents();

  return (
    <>
      <DockLayout bottomOverlay={<SearchDock></SearchDock>}>
        <div className="mx-auto max-w-7xl space-y-3 px-4 py-6">
          {!isLoading &&
            events?.map((event) => (
              <EventCard key={event.id} event={event}></EventCard>
            ))}
        </div>
      </DockLayout>
    </>
  );
}
