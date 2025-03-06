import axios from "axios";
import Link from "next/link";

export default async function Home() {
  const response = await axios.get("http://localhost:3000/api/v1/user/details");

  const data = response.data;

  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-5">Todo application</h1>
      <Link
        className="cursor-pointer border-1 border-gray-400 py-2 px-4 rounded-lg"
        href="/signup"
      >
        Sign up
      </Link>
      <Link
        className="cursor-pointer mt-4 border-1 border-gray-400 py-2 px-4 rounded-lg"
        href="/login"
      >
        Log in
      </Link>
    </div>
  );
}
