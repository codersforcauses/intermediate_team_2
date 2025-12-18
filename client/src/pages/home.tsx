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
import DockLayout from "./layouts/docklayout";

export default function Home() {
  const { data: events, isLoading } = useEvents();

  return (
    <>
      <DockLayout
        bottomOverlay={
          <div className="grid grid-cols-10 bg-green-100">
            <div className="col-span-8 grid items-center gap-2 rounded-full bg-purple-100 bg-white px-4 py-3 shadow-lg">
              <div className="rounded-full bg-red-100 px-4 py-2">
                <input
                  type="text"
                  placeholder="Search events"
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </div>
            <div className="col-span-1 flex justify-end gap-2">
              <button className="w-full rounded-full bg-blue-100 p-2 hover:bg-gray-100">
                🔍
              </button>
            </div>
            <div className="col-span-1 flex justify-end gap-2">
              <button className="w-full rounded-full bg-blue-100 p-2 hover:bg-gray-100">
                🔍
              </button>
            </div>
          </div>
        }
      >
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
                  <Button>Signup</Button>
                  <Button>Signup</Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </DockLayout>
    </>
  );
}
