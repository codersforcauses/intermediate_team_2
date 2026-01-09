import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { Event } from "../../hooks/events";
import { Button } from "./button";
import TagList from "./tag-list";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle>{event.event_name}</CardTitle>
        <CardDescription>{event.event_location}</CardDescription>
      </CardHeader>

      <CardContent>
        <TagList tags={event.tags}></TagList>
        <p className="line-clamp-3 text-muted-foreground">
          {event.event_description}
        </p>
      </CardContent>

      <CardFooter className="flex-end flex-row justify-center gap-2">
        <Link href={`/events/${event.id}`} className="w-full">
          <Button className="w-full rounded-full">View Details</Button>
        </Link>
        <Link href={`/events/${event.id}`}>
          <Button className="rounded-full">Signup</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
