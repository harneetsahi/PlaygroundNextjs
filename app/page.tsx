import { useSession } from "next-auth/react";

export default async function Home() {
  const session = useSession();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      Home
    </div>
  );
}
