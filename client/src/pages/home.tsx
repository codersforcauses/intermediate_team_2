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
import Layout from "./layout";

export default function Home() {
  const { data: events, isLoading } = useEvents();

  return (
    <Layout>
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

              <CardFooter className="flex justify-end gap-2">
                <Button>Signup</Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </Layout>
  );
}
