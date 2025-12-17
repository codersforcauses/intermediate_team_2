import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import api from "../lib/api";

// hook to fetch events list
export const useEvents = (
  args?: Omit<UseQueryOptions, "queryKey" | "queryFn">,
) => {
  return useQuery({
    ...args,
    queryKey: ["events"],
    queryFn: () => api.get("/event/").then((res) => res.data),
  });
};
