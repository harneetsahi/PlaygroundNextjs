"use client";
import Link from "next/link";
import axios from "axios";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const route = useRouter();

  async function handleSignup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    console.log(username, password);

    await axios.post("http://localhost:3000/api/v1/signup", {
      username,
      password,
    });

    route.push("/login");
  }

  return (
    <>
      <div className="flex gap-5 justify-center items-center flex-col h-screen">
        <h1 className="text-2xl mb-5">Sign up</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Username</label>
          <input
            className="border-1 border-gray-400 py-2 px-4 rounded-lg"
            type="text"
            placeholder="username"
            ref={usernameRef}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Password</label>
          <input
            className="border-1 border-gray-400 py-2 px-4 rounded-lg"
            type="password"
            placeholder="password"
            ref={passwordRef}
          />
        </div>
        <button
          onClick={() => {
            handleSignup();
          }}
          className="cursor-pointer mb-5"
        >
          Sign up
        </button>
        <div className="flex gap-2 text-sm">
          Already have an account?
          <Link className="cursor-pointer text-emerald-400" href="/login">
            Log in
          </Link>
        </div>
      </div>
    </>
  );
}
