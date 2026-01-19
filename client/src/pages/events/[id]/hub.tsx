import Link from "next/link";
import { useRouter } from "next/router";
import Confetti from "react-confetti";

import { Button } from "@/components/ui/button";
import HubDisplay from "@/components/ui/hub-display";
import { useEvent } from "@/hooks/events";
import ActionLayout from "@/pages/layouts/actionlayout";

export default function ParticipantsPage() {
  const router = useRouter();
  const { id } = router.query;
  const eventId = Number(id);
  const { data: event } = useEvent(eventId);

  if (!event) {
    return <p>Event not found</p>;
  }

  const eventDate = new Date(event.event_date);
  const now = new Date();
  const hasEnded = eventDate < now;

  return (
    <>
      <Confetti numberOfPieces={1000} recycle={false} />
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
        {hasEnded ? <HubDisplay /> : <Button>Event has ended!</Button>}
      </ActionLayout>
    </>
  );
}
