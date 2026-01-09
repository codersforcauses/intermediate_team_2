import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "@/components/ui/button";
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
          <Link
            href={"/events/" + eventId + "/participants"}
            className="flex-1"
          >
            <Button className="w-full rounded-full">Unused Button</Button>
          </Link>
        }
      >
        {!isLoading && event?.participants && event.participants.length > 0 && (
          <div>
            {event.participants.map((p) => (
              <p key={p.id}>{p.username}</p>
            ))}
          </div>
        )}

        {!isLoading && event?.participants?.length === 0 && (
          <p>No participants yet.</p>
        )}
      </ActionLayout>
    </>
  );
}
