import Image from "next/image";

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

      <div className="flex min-w-full min-h-screen z-10">
        <div className="flex-1">
          <h1 className="text-white font-black text-4xl py-10">
            Techbia
          </h1>
        </div>
        <div className="flex-1 justify-center items-center py-10 px-12">
          <div className="bg-white rounded-3x1 min-w-full min-h-full flex justify-center items-center ">
            sdg
          </div>
        </div>
      </div>

    </main>
  );
}
