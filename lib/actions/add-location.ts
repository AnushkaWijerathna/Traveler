//location add action to handle form submission from the NewLocationClient component and add the selected location to the itinerary item in the database
"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

/*Getiing geoLocation using google api...This Api costs money so I am not implementing it for now, but this is how you would do it if you wanted to get the lat and lng from the address entered by the user

async function geocodeAddress(address: string) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY!;
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`
  );

  const data = await response.json();
  const { lat, lng } = data.results[0].geometry.location;
  return { lat, lng };
}*/

export async function addLocation(formData: FormData, tripId: string) {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const address = formData.get("address") as string;
  if (!address) {
    throw new Error("Address is required");
  }

  //const { lat, lng } = await geocodeAddress(address);

  //Here you would add the location to the database, including the address and the lat and lng if you were using the geocoding API
  /*
    await prisma.location.create({
      data: {
        locationTitle: address,
        lat,
        lng,
        tripId,
        order:count,
      },
    });*/

  redirect(`/trips/${tripId}`);
}
