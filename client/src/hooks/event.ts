import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import api from "../lib/api";
import type { Event } from "./events";

export const useEvent = (
  id: number,
  args?: Omit<UseQueryOptions<Event>, "queryKey" | "queryFn">,
) => {
  return useQuery<Event>({
    queryKey: ["event", id],
    queryFn: () => {
      return api.get(`/events/${id}/`).then((res) => res.data);
    },
    enabled: !!id,
    ...args,
  });
};
