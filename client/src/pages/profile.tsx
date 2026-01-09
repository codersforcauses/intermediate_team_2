import { useRouter } from "next/router";
import { useEffect } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useMe } from "@/hooks/me";

import Layout from "./layout";

export default function Home() {
  const router = useRouter();
  const { data: me, isLoading } = useMe();
  useEffect(() => {
    console.log("user profile:", me);
  }, [me]);

  return (
    <Layout>
      <Card className="mx-auto mt-10 w-full max-w-2xl pb-10 pt-1">
        <CardContent>
          <div className="flex flex-col items-center space-y-3 text-center">
            <Avatar className="border-black-500 mt-20 h-32 w-32 rounded-full border-2">
              <AvatarImage src="/test.png" alt="Profile Picture" />
              <AvatarFallback>Profile Picture</AvatarFallback>
            </Avatar>
            <div className="UserName">
              <h1 className="mt-2 text-xl font-semibold">
                {isLoading ? "Loading" : me?.username}
              </h1>
            </div>
            <div className="UserEmail">
              <p className="text-sm text-gray-500">
                {isLoading ? "Loading" : me?.email}
              </p>
            </div>
            <div className="UserTags">
              <Badge className="Tag1 mt-2" variant="secondary">
                Outdoor Enthusiast
              </Badge>
              <Badge className="Tag2 ml-2 mt-2" variant="secondary">
                Anime Geek
              </Badge>
              <Badge className="Tag3 ml-2 mt-2" variant="secondary">
                Traveler
              </Badge>
              <Badge className="Tag4 ml-2 mt-2" variant="secondary">
                Gamer
              </Badge>
            </div>
            <div className="Separator w-full px-40 py-3">
              <Separator />
            </div>
            <div className="self-intro px-20">{me?.profile.profile_info}</div>
          </div>
          <CardFooter className="flex justify-center">
            <Button className="mt-20" onClick={() => router.push("/edit")}>
              Edit Profile
            </Button>
          </CardFooter>
        </CardContent>
      </Card>

      {/* 
      <div className="p-6">
        <h1 className="text-2xl font-bold">Profile</h1>
        <p>Profile</p>
        <p>{isLoading ? "Loading" : `Username: ${data?.username}`}</p>
        <p>{isLoading ? "Loading" : data?.email}</p>
        
      </div> */}
    </Layout>
  );
}
