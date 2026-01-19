import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";

import api from "../lib/api";

export interface Tag {
  id: number;
  name: string;
}

export interface EventImage {
  url: string;
  id: number;
  image: string;
}

export interface Participant {
  id: number;
  username: string;
  first_name: string;
  email: string;
}

export interface Event {
  id: number;
  event_name: string;
  event_description: string;
  event_date: string;
  event_location: string;
  tags: Tag[];
  images: EventImage[];
  participants: Participant[];
}

// hook to fetch events list
export const useEvents = (
  args?: Omit<UseQueryOptions<Event[]>, "queryKey" | "queryFn">,
) => {
  return useQuery<Event[]>({
    ...args,
    queryKey: ["events"],
    queryFn: () => api.get("/events/").then((res) => res.data),
  });
};

// hook to fetch single event by id
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

// flow: ask the backend to change, then refetch the data
// queryclient can mark the cached data as stale, which refetches the data
export const useSignupEvent = (eventId: number) => {
  const queryClient = useQueryClient();

  // post to the url
  return useMutation({
    mutationFn: async () => {
      const response = await api.post(`/events/${eventId}/signup/`);
      return response.data;
    },

    // if successful, mark as stale, trigger refetch
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["event", eventId] });
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });
};
