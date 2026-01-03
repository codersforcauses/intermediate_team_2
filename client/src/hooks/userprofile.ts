import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import api from "@/lib/api";

type UserProfile = {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_superuser: boolean;
  profile: {
    id: number;
    profile_info: string;
    role: string;
    user: number;
  };
};

export const useUserProfile = (
  args?: Omit<UseQueryOptions, "queryKey" | "queryFn">,
) => {
  return useQuery({
    ...args,
    queryKey: ["userProfile"],
    queryFn: async () => {
      const user_id = 1; /*  for now here just put 1 to make sure we can still fetch before the login system is created" */
      const res = await api.get("/user/");
      const user_profile = res.data;
      const CurrentUser = user_profile.find(
        (u: UserProfile) => u.id === user_id,
      );

      return CurrentUser;
    },
  });
};
