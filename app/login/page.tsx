"use client";
import Link from "next/link";
import axios from "axios";
import { useRef } from "react";

export default function Login() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  async function handleLogin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    await axios.post("http://localhost:3000/api/v1/login", {
      username,
      password,
    });
  }

  return (
    <>
      <div className="flex gap-5 justify-center items-center flex-col h-screen">
        <h1 className="text-2xl mb-5">Log in</h1>
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
            handleLogin();
          }}
          className="cursor-pointer mb-5"
        >
          Log in
        </button>
        <div className="flex gap-2 text-sm">
          Don't have an account?
          <Link className="cursor-pointer text-emerald-400" href="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
}
