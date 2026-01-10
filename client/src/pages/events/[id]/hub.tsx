import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEvent } from "@/hooks/events";
import ActionLayout from "@/pages/layouts/actionlayout";

export default function ParticipantsPage() {
  const router = useRouter();
  const { id } = router.query;
  const eventId = Number(id);

  const { data: event, isLoading } = useEvent(eventId);

  return (
    <>
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
          <Link href={"/events/" + eventId + "/hub"} className="flex-1">
            <Button className="w-full rounded-full"> Unregister </Button>
          </Link>
        }
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <div className="relative mb-6 h-56 w-full overflow-hidden rounded-xl bg-gray-200">
            {event?.images?.[0]?.image && (
              <Image
                src={event.images[0].image}
                alt={event.event_name}
                fill
                className="object-cover"
              />
            )}
          </div>
          {!isLoading &&
            event?.participants &&
            event.participants.length > 0 && (
              <div className="grid gap-4">
                {event.participants.map((p) => (
                  <Card key={p.id}>
                    <CardContent className="flex items-center gap-4 p-4">
                      <Avatar>
                        <AvatarFallback>
                          {p.username.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <p className="font-medium">{p.username}</p>
                        <p className="text-sm text-muted-foreground">
                          Attending this event
                        </p>
                      </div>

                      <Button variant="default" size="sm">
                        meow
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
        </div>

        {!isLoading && event?.participants?.length === 0 && (
          <p>No participants yet.</p>
        )}
      </ActionLayout>
    </>
  );
}
