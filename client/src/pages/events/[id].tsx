import { useRouter } from "next/router";

import TagList from "@/components/ui/tag-list";
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
        <TagList tags={event.tags}></TagList>
      </DockLayout>
    </>
  );
}
