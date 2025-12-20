import Image from "next/image";
import Link from "next/link";
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
          className="flex-1 rounded-full"
          onClick={() => router.back()}
        >
          Back
        </Button>
      }
      primaryAction={
        <Link href={"/events/" + id + "/participants"} className="flex-1">
          <Button className="w-full rounded-full">Join Event</Button>
        </Link>
      }
    >
      {/* main container */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
        {/* image container */}
        <div className="relative h-56 w-full overflow-hidden rounded-xl bg-gray-200">
          <Image
            className="h-full w-full object-cover"
            src={event.images[0]?.image}
            alt={event.event_name}
            fill
          ></Image>
        </div>
        {/* if more than one image -> return div with all other images */}
        {event.images.length > 1 && (
          <div className="mt-6 grid grid-cols-3 gap-3">
            {event.images.slice(1).map((img) => (
              <div key={img.id} className="relative h-24 w-full">
                <Image
                  src={img.image}
                  alt={event.event_name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        )}

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
