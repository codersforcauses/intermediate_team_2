import { useRouter } from "next/router";

import { useEvent } from "@/hooks/event";

import DockLayout from "../layouts/docklayout";

export default function EventDetailsPage() {
  // useRouter allows access to URL parameters
  const router = useRouter();
  const id = Number(router.query.id);

  const { data: event, isLoading } = useEvent(id);
  if (isLoading) {
    return <p>Loading event...</p>;
  }

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <>
      <DockLayout>
        <div>
          <h1>{event.event_name}</h1>
          <p>{event.event_description}</p>
        </div>
      </DockLayout>
    </>
  );
}
