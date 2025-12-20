import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "@/components/ui/button";
import ActionLayout from "@/pages/layouts/actionlayout";

export default function ParticipantsPage() {
  const router = useRouter();
  const { id } = router.query;

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
          <Link href={"/events/" + id + "/participants"} className="flex-1">
            <Button className="w-full rounded-full">Unused Button</Button>
          </Link>
        }
      >
        <div>Participants for event {id}</div>
      </ActionLayout>
    </>
  );
}
