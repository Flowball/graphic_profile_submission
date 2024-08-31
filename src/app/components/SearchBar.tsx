import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  return (
    <div className="relative flex w-full">
      <MagnifyingGlassIcon className="size-8 absolute left-3 top-1/2 transform -translate-y-1/2" />
      <input type="text" className=" px-12 py-4 rounded-2xl  shadow-md border-black w-full" />
    </div>
  );
}
