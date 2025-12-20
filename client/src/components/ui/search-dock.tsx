import { Filter, Search } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

export default function SearchDock() {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-6 grid items-center rounded-full bg-white bg-white/90 px-1 py-0.5 shadow-lg backdrop-blur">
        <div className="rounded-full px-3 py-1.5">
          <input
            placeholder="Search events"
            className={cn("w-full bg-transparent text-base outline-none")}
          />
        </div>
      </div>
      <div className="col-span-4 flex h-full w-full items-center gap-2 px-2">
        <Button className="h-full w-full rounded-full p-2 hover:bg-gray-100">
          <Search />
        </Button>
        <Button className="h-full w-full rounded-full p-2 hover:bg-gray-100">
          <Filter />
        </Button>
      </div>
    </div>
  );
}
