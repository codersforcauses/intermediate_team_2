import { Filter, Search } from "lucide-react";

import { Button } from "./button";

export default function SearchDock() {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-6 grid items-center gap-2 rounded-full bg-purple-100 bg-white px-4 py-3 shadow-lg">
        <div className="rounded-full px-4 py-2">
          <input
            placeholder="Search events"
            className="w-full bg-transparent text-base outline-none"
          />
        </div>
      </div>
      <div className="col-span-4 flex h-full w-full items-center gap-2 px-2">
        <Button className="h-full w-full rounded-full p-2 hover:bg-gray-100">
          <Search></Search>
        </Button>
        <Button className="h-full w-full rounded-full p-2 hover:bg-gray-100">
          <Filter></Filter>
        </Button>
      </div>
    </div>
  );
}
