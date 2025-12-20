import { useRouter } from "next/router";

export default function ParticipantsPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Participants for event {id}</div>;
}
