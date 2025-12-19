import { useRouter } from "next/router";

import { Button } from "@/components/ui/button";
import TagList from "@/components/ui/tag-list";
import { useEvent } from "@/hooks/event";

import ActionLayout from "../layouts/actionlayout";

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
    <ActionLayout
      secondaryAction={
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => router.back()}
        >
          Back
        </Button>
      }
      primaryAction={<Button className="flex-1">Join Event</Button>}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
        <div className="relative h-56 w-full overflow-hidden rounded-xl bg-gray-200">
          <div className="absolute -bottom-6 left-6">
            <div className="h-16 w-16 rounded-full border-4 border-white bg-gray-300" />
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl font-semibold">{event.event_name}</h1>

          {/* Tags */}
          <div className="mt-3">
            <TagList tags={event.tags} />
          </div>

          {/* Description */}
          <div className="mt-6 break-words text-muted-foreground">
            <p>{event.event_description}</p>
          </div>
        </div>
      </div>
    </ActionLayout>
  );
}
