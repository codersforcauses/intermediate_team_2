import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import api from "../lib/api";

export type Event = {
  id: number;
  event_name: string;
  event_description: string;
  event_date: string;
  event_location: string;
};

// hook to fetch events list
export const useEvents = (
  args?: Omit<UseQueryOptions<Event[]>, "queryKey" | "queryFn">,
) => {
  return useQuery<Event[]>({
    ...args,
    queryKey: ["events"],
    queryFn: () => api.get("/event/").then((res) => res.data),
  });
};
