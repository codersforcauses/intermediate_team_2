// import Link from "next/link";
// import Image from "next/image";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import type { Event } from "../../hooks/events";
// import { Button } from "./button";
// import TagList from "./tag-list";

// interface EventCardProps {
//   event: Event;
// }

// export default function EventCard({ event }: EventCardProps) {
//   return (
//     <Card>
//       <CardHeader className="p-3">
//         <CardTitle>{event.event_name}</CardTitle>
//         <CardDescription>{event.event_location}</CardDescription>
//       </CardHeader>

//       <CardContent>
//         <TagList tags={event.tags}></TagList>
//         <p className="line-clamp-3 text-muted-foreground">
//           {event.event_description}
//         </p>
//       </CardContent>

//       <CardFooter className="flex-end flex-row justify-center gap-2">
//         <Link href={`/events/${event.id}`} className="w-full">
//           <Button className="w-full rounded-full">View Details</Button>
//         </Link>
//         <Link href={`/events/${event.id}`}>
//           <Button className="rounded-full">Signup</Button>
//         </Link>
//       </CardFooter>
//     </Card>
//   );
// }

import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";

import type { Event } from "../../hooks/events";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const image = event.images?.[0]?.image;

  return (
    <div className="flex justify-center">
      <Link href={`/events/${event.id}`} className="group w-full max-w-5xl">
        <Card className="flex h-[260px] w-full gap-6 rounded-2xl bg-muted/40 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl active:scale-[0.99]">
          <div className="flex flex-1 flex-col justify-between overflow-hidden">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {new Date(event.event_date).toLocaleDateString("en-AU", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>

              <h2 className="text-2xl font-semibold leading-tight">
                {event.event_name}
              </h2>

              <p className="text-muted-foreground">{event.event_location}</p>

              <div className="no-scrollbar flex gap-2 overflow-x-auto py-2">
                {event.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="whitespace-nowrap rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              <p className="line-clamp-3 text-sm text-muted-foreground">
                {event.event_description}
              </p>
            </div>
          </div>

          <div className="relative h-full w-[280px] flex-shrink-0 overflow-hidden rounded-xl bg-gray-200">
            {image && (
              <Image
                src={image}
                alt={event.event_name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
          </div>
        </Card>
      </Link>
    </div>
  );
}
