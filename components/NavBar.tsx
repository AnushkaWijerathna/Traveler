import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md py-4 border-b border-gray-200">
      {" "}
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-8">
        <Link>
          <Image src={"/"}></Image>
        </Link>
      </div>
    </nav>
  );
}
