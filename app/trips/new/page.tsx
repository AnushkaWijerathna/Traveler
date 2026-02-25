"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { createTrip } from "@/lib/actions/create-trip";
import { cn } from "@/lib/utils";
import { UploadButton } from "@/lib/upload-thing";
import { useState, useTransition } from "react";
import { error } from "node:console";
import Image from "next/image";

export default function NewTrip() {
  const [isPending, startTransition] = useTransition();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  return (
    <div className="max-w-lg mx-auto mt-10">
      <Card>
        <CardHeader>New Trip</CardHeader>
        <CardContent>
          <form
            className="space-y-6"
            //we send formData and Image URL to the createTrip action
            action={(formData: FormData) => {
              if (imageUrl) {
                formData.append("imageUrl", imageUrl);
              }
              startTransition(() => {
                createTrip(formData);
              });
            }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Trip Title..."
                className={cn(
                  "w-full p-2 border border-gray-300 px-3 py-2 rounded-md",
                  "focus:outline-none focus:ring-2 focus:ring-sky-500",
                )}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Trip Description..."
                className={cn(
                  "w-full p-2 border border-gray-300 px-3 py-2 rounded-md",
                  "focus:outline-none focus:ring-2 focus:ring-sky-500",
                )}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {" "}
                  Start date
                </label>
                <input
                  type="date"
                  name="startDate"
                  className={cn(
                    "w-full p-2 border border-gray-300 px-3 py-2 rounded-md",
                    "focus:outline-none focus:ring-2 focus:ring-sky-500",
                  )}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {" "}
                  End date
                </label>
                <input
                  type="date"
                  name="endDate"
                  className={cn(
                    "w-full p-2 border border-gray-300 px-3 py-2 rounded-md",
                    "focus:outline-none focus:ring-2 focus:ring-sky-500",
                  )}
                />
              </div>
            </div>
            <div>
              {/*Image preview*/}
              <label>Trip Image</label>

              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt="Trip Preview"
                  className="w-full max-h-48 object-cover rounded-md mb-4"
                  width={300}
                  height={200}
                />
              )}

              <UploadButton
                endpoint="imageUploader"
                //runs when user upload image...when uploading is complete the user will recieve a URL of that image which is publically accesible
                onClientUploadComplete={(res) => {
                  if (res && res[0].ufsUrl) {
                    setImageUrl(res[0].ufsUrl);
                  }
                }}
                onUploadError={(error: Error) => {
                  console.error("Upload Error: ", error);
                }}
              />
            </div>
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? "Creating..." : "Create Trip"}{" "}
              {/*If isPending the creating.. else create Trip */}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
