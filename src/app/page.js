
"use client"
import Image from "next/image";
import { Eye } from "@phosphor-icons/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 max-h-screen">
      <Image src="/assets/woman.jpg"
        alt="logo"
        width={1600}
        height={1400}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div className="absolute inset-0 bg-indigo-800 opacity-45" />

      <div className="flex min-w-full min-h-screen z-10 py-10">
        <div className="flex-[1.7]">
          <h1 className="text-white font-black text-3xl ">
            Techbia
          </h1>
        </div>
        <div className=" flex-1 justify-center items-center px-5">
          <div className="gap-5 bg-white rounded-3xl min-w-full min-h-full flex justify-center items-start flex-col p-8 text-black">
            <h1 className="text-3xl font-bold text-black">
              Let&apos;s create account.
            </h1>
            <p>Get stardet by creating your account</p>

            <div className="flex min-w-full gap-4">
              <input className="border-none focus:outline-none bg-opacity-30 bg-gray-400 rounded-2xl plceholder-gray-400 p-4 flex-1" placeholder="First Name" />

              <input className="border-none focus:outline-none bg-opacity-30 bg-gray-400 rounded-2xl plceholder-gray-400 p-4 flex-1" placeholder="Last Name" />
            </div>
            <input className="border-none focus:outline-none bg-opacity-30 bg-gray-400 rounded-2xl plceholder-gray-400 p-4 min-w-full" placeholder="Email" />
            <div className="h-16 w-full bg-gray-200 rounded-xl flex items-center px-4 gap-4">
              <Image src="/assets/bandeira.png" alt="arrow" style={{ zIndex: 20 }} width={40} height={40} />
              <p>+ 1</p>
              <div className="w-[1.5px] h-[80%] bg-gray-400 rounded " />
              <input className="flex-grow bg-transparent focus:outline-none" placeholder="Phone Number " />
            </div>

            <div className="flex gap-4">
              <div className="flex h-16 w-full bg-gray-200 rounded-xl flex items-center px-4">
                <input className="flex-grow bg-transparent focus:outline-none" placeholder="Password " />
                <Eye color="#9da3af" size={20} />
              </div>
              <div className="flex h-16 w-full bg-gray-200 rounded-xl flex items-center px-4">
                <input className=" flex-grow bg-transparent focus:outline-none" placeholder="Confirm password" />
                <Eye color="#9da3af" size={20} />
              </div>
            </div>
            <div className="flex gap-5 max-w-full">
            </div>

            <div className="flex items-center px-4">
              <span>
                <input type="checkbox" className="mr-2 h-5 w-5" />
              </span>
              <p>By checking this box you are agreeing with our Terms and Conditions and Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
