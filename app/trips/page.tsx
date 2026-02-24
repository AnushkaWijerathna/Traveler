//Only accessible when logged in
//import { authOptions } from "@/lib/auth";

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

//import { getServerSession } from "next-auth";
export default async function TripsPage() {
  const session = await auth();
  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-700 text-xl">
        <h1>You are not logged in</h1>
      </div>
    );
  }
  return (
    <div className="space-y-6 container mx-auto px-4 py-8">
      {" "}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

        {/*Since this is a server component we can not use "onCLick()"
        "Button" ia a component that we are going to re use, it is imported from ui/button*/}
        <Link href={"/trips/new"}>
          <Button>New Trip</Button>
        </Link>
      </div>
    </div>
  );
}
