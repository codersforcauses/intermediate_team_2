export default function SearchDock() {
  return (
    <div className="grid grid-cols-10 bg-green-100">
      <div className="col-span-8 grid items-center gap-2 rounded-full bg-purple-100 bg-white px-4 py-3 shadow-lg">
        <div className="rounded-full bg-red-100 px-4 py-2">
          <input
            type="text"
            placeholder="Search events"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
      </div>
      <div className="col-span-1 flex justify-end gap-2">
        <button className="w-full rounded-full bg-blue-100 p-2 hover:bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1 flex justify-end gap-2">
        <button className="w-full rounded-full bg-blue-100 p-2 hover:bg-gray-100">
          🔍
        </button>
      </div>
    </div>
  );
}
