//Client side Location adding form

"use client";

import { useTransition } from "react";
import { Button } from "./ui/button";
import { addLocation } from "@/lib/actions/add-location";

export default function NewLocationClient({ tripId }: { tripId: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          {" "}
          Add New Location
        </h1>

        <form
          className="space-y-4"
          action={(formData: FormData) => {
            startTransition(() => {
              addLocation(formData, tripId);
            });
          }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              name="address"
              type="text"
              required
              className="mt-1 w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button type="submit" className="w-full">
            {isPending ? "Saving..." : "Save Location"}
          </Button>
        </form>
      </div>
    </div>
  );
}
