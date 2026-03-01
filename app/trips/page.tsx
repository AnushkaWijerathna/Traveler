//This is the DashBoard, Only accessible when logged in
//import { authOptions } from "@/lib/auth";

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

//import { getServerSession } from "next-auth";
export default async function TripsPage() {
  const session = await auth();

  //Retrieving trip details
  const trips = await prisma.trip.findMany({
    //In findMany Querry i need specifically the user id
    where: {
      userId: session?.user?.id,
    },
  });

  //distinction between Already visited and future trips...Sorting is done using the startDate of a and b...result= more recently start date sorted
  const sortedTrips = [...trips].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcomingTrips = sortedTrips.filter(
    (trip) => new Date(trip.startDate) >= today,
  );

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-700 text-xl">
        <h1>You are not logged in</h1>
      </div>
    );
  }
  return (
    <div className="space-y-6 container mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          Dashboard
        </h1>

        {/*Since this is a server component we can not use "onCLick()"
        "Button" ia a component that we are going to re use, it is imported from ui/button*/}
        <Link href={"/trips/new"}>
          <Button>New Trip</Button>
        </Link>
      </div>
      <Card>
        {/*This is the Welcome card where we are going to display our trips and details*/}
        <CardHeader>
          <CardTitle>Welcome back {session.user?.name}</CardTitle>
        </CardHeader>

        <CardContent>
          {/*Display the trips details of the current user*/}
          <p>
            {/* Display trip count with singular/plural wording, and note how many are upcoming if any */}
            {trips.length === 0
              ? "You have no trips yet"
              : `You have ${trips.length} 
                ${trips.length === 1 ? "trip" : "trips"} planned. ${
                  upcomingTrips.length > 0
                    ? `${upcomingTrips.length} upcoming.`
                    : ""
                } 
            `}
          </p>
        </CardContent>
      </Card>
      {/*Recent trips*/}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Recent Trips</h2>
        {/*Checking whether trips array is empty*/}
        {trips.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-8">
              <h3 className="text-xl font-medium mb-2">No Trips Yet</h3>
              <p className="text-center mb-4 max-w-md">
                Start planning your trips by creating your trips
              </p>
              <Link href={"/trips/new"}>
                <Button>Create Trip</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          //if already created trips, we will display them as a grid...Each trip as a specific card
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/*Trps are sorted so that the most recent 6 trips will be displayed...We pass a key to avoid any warnings */}
            {sortedTrips.slice(0, 6).map((trip, key) => (
              <Link key={key} href={""}>
                <Card className="h-full hover:shadow-md transform-shadow">
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{trip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm line-clamp-2 mb-2">
                      {trip.description}
                    </p>

                    <div className="text-sm">
                      {/*Trips dates*/}
                      {new Date(trip.startDate).toLocaleDateString()} -{" "}
                      {new Date(trip.endDate).toLocaleDateString()}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
