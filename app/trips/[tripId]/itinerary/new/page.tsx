//Location page using Google Maps API to allow users to search for and select a location for their itinerary item

import NewLocationClient from "@/components/new-location";

export default async function NewLocation({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const { tripId } = await params;

  //Create a client component to handle the Google Maps API and location selection(like a form) and connect here
  return <NewLocationClient tripId={tripId} />;
}
