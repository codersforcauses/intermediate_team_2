import Link from "next/link";

import { useEvents } from "@/hooks/events";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import SearchDock from "../components/ui/search-dock";
import DockLayout from "./layouts/docklayout";

export default function Home() {
  const { data: events, isLoading } = useEvents();

  return (
    <>
      <DockLayout bottomOverlay={<SearchDock></SearchDock>}>
        <div className="mx-auto max-w-7xl space-y-3 px-4 py-6">
          {!isLoading &&
            events?.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.event_name}</CardTitle>
                  <CardDescription>{event.event_location}</CardDescription>
                </CardHeader>

                <CardContent>
                  <p>{event.event_description}</p>
                </CardContent>

                <CardFooter className="flex-end flex-row justify-end gap-2">
                  <Button>
                    <Link href={`/events/${event.id}`}>View Details</Link>
                  </Button>
                  <Button>Signup</Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </DockLayout>
    </>
  );
}
