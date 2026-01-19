import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Landing page has nav menu on top with a signup on the right
// scrolling content underneath?
export default function Home() {
  return (
    <div className="flex flex-row justify-center gap-6 p-6">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Events</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <Link href={"/"}>INDEX</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Clubs</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Idk another placeholder
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About us</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-row justify-end gap-6">
        <Button>Join or something</Button>
      </div>
    </div>
  );
}
