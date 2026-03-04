//Client component
"use client";

import { Trip } from "@prisma/client";
import Image from "next/image";
import { Calendar, MapPin, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";

// interface TripWithLocation = Trip & {
//   location: Location[];
// }
interface TripDetailClientProps {
  trip: Trip;
}

export default function TripDetailClient({ trip }: TripDetailClientProps) {
  //To keep what tab is currently active, we can use useState hook to manage the state of the active tab. This will allow us to conditionally render the content based on the selected tab.Deafult active tab is set to "overview"
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container mx-auto px4 py-8 space-y-8 md:px-35 ">
      {trip.imageUrl && (
        <div className="w-full h-72 md:h-86 overflow-hidden rounded-xl shadow-lg relative">
          {" "}
          <Image
            src={trip.imageUrl}
            alt={trip.title}
            className="object-cover"
            fill
            priority
          />
        </div>
      )}
      <div className="bg-white p-6 shadow rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900 mb-2">{trip.title}</h1>

          <div className="flex items-center text-gray-500 mt-2">
            <Calendar className="h-5 w-5 mr-1" size={16} />
            <span className="text-md">
              {trip.startDate.toLocaleDateString()}-{" "}
              {trip.endDate.toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          {/* Link to add new location to the itinerary of the trip */}
          <Link
            className="text-blue-500 hover:underline"
            href={`/trips/${trip.id}/itinerary/new`}
          >
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Location
            </Button>
          </Link>
        </div>
      </div>

      {/* Additional trip details can be added here, such as description, itinerary summary, etc. */}
      <div className="bg-white p-6 shadow rounded-lg">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview" className="text-lg">
              Overview
            </TabsTrigger>
            <TabsTrigger value="itinerary" className="text-lg">
              Itinerary
            </TabsTrigger>
            <TabsTrigger value="map" className="text-lg">
              Map
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Trip Summary
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-gray-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-500">Dates</p>
                      <p className="text-sm text-gray-500">
                        {trip.startDate.toLocaleDateString()} -{" "}
                        {trip.endDate.toLocaleDateString()}
                        <br />
                        {/* Calculate the number of days in the trip, converting it from milliseconds to days, and adding 1 to include both the start and end dates. */}
                        {`${
                          Math.round(
                            (trip.endDate.getTime() -
                              trip.startDate.getTime()) /
                              (1000 * 60 * 60 * 24),
                          ) + 1
                        } days(s)`}
                      </p>
                    </div>
                  </div>
                  {
                    // Display the destination/locations of the trip
                  }
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                    {/*<div>
                      <p className="font-medium text-gray-500">Destination</p>
                      <p className="text-sm text-gray-500">
                        {trip.locations.length} {if trip.locations.length === 1 ? "location" : "locations"}
                      </p>
                    </div>*/}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="itinerary">
            {/* Itinerary content will go here */}
          </TabsContent>

          <TabsContent value="map">
            {/* Map content will go here */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
