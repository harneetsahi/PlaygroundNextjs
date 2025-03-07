import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      {JSON.stringify(session)}
    </div>
  );
}
