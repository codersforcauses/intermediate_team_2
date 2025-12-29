import { useQuery } from "@tanstack/react-query";

import api from "@/lib/api";

export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
}

export const useMe = () =>
  useQuery<User>({
    queryKey: ["me"],
    queryFn: () => api.get("/user/me/").then((r) => r.data),
  });
