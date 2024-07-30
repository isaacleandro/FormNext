
"use client"
import Image from "next/image";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";
import { validateEmail } from "@/utils/validateFunctions";
import { validatePhoneNumber } from "@/utils/validateFunctions";
import { masksPhoneNumber } from "@/utils/masks";
import Button from "@/components/button";

//Scripts...........................................................
export default function Home() {

  const [erroMessege, setErrorMessage] = useState("");

  const [seePassword, setSeePassword] = useState(true);

  const [FirstInputPassword, setFirstInputPassword] = useState("");
  const [SecondInputPassword, setSecondInputPassword] = useState("");

  function onBlurEmail(event) {
    const email = event.target.value;

    if (validateEmail(email)) {
      setErrorMessage("");
    } else {
      setErrorMessage("*Email inválido, insira um email válido");
    }
  }

  function onBlurPhoneNumber(event) {
    let phoneNumber = event.target.value;

    phoneNumber = phoneNumber.replace(/\D/g, "");

    if (validatePhoneNumber(phoneNumber)) {
      event.target.value = masksPhoneNumber(phoneNumber);
    
      setErrorMessage("");
    } else {
      setErrorMessage("*Número inválido, insira um número válido");
    }

  }

  function toggleSeePassword() {
    setSeePassword(!seePassword);
  }


  //Html..............................................................

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

            <div className="flex min-w-full gap-4 ">
              <input className="border-none focus:outline-none bg-opacity-30 bg-gray-400 rounded-2xl plceholder-gray-400 p-4 flex-1" placeholder="First Name" />
              <input className="border-none focus:outline-none bg-opacity-30 bg-gray-400 rounded-2xl plceholder-gray-400 p-4 flex-1" placeholder="Last Name" />
            </div>

            <input onBlur={onBlurEmail} className="border-none focus:outline-none bg-opacity-30 bg-gray-400 rounded-2xl plceholder-gray-400 p-4 min-w-full" placeholder="Email" />

            <div className="h-16 w-full bg-gray-200 rounded-xl flex items-center px-4 gap-4">
              <Image src="/assets/bandeira.png" alt="arrow" style={{ zIndex: 20 }} width={45} height={40} />
              <p>+ 55</p>
              <div className="w-[1.5px] h-[80%] bg-gray-400 rounded " />
              <input onBlur={onBlurPhoneNumber} className="flex-grow bg-transparent focus:outline-none" placeholder="Phone Number " />
            </div>

            <div className="flex gap-4">
              <div className="flex h-16 w-full bg-gray-200 rounded-xl items-center px-4">
                <input 
                type={seePassword ? "text" : "password"} 
                className="flex-grow bg-transparent focus:outline-none" 
                placeholder="Password "
                onClick={toggleSeePassword}
                 />
                {seePassword ? <EyeSlash onClick={toggleSeePassword}  color="#9da3af" size={20} /> : <Eye onClick={toggleSeePassword}  color="#9da3af" size={20} />}
              </div>

              <div className="flex h-16 w-full bg-gray-200 rounded-xl  items-center px-4">
                <input 
                type={seePassword ? "text" : "password"} 
                className=" flex-grow bg-transparent focus:outline-none" 
                placeholder="Confirm password" 
                value={FirstInputPassword}
                onChange={(event) => setFirstInputPassword(event.target.value)}/>
                {seePassword ? <EyeSlash onClick={toggleSeePassword} color="#9da3af" size={20} /> : <Eye onClick={toggleSeePassword}  color="#9da3af" size={20} />}
              </div>
            </div>

            <div className="text-red-500">
              {erroMessege}
            </div>

            <div className="flex-col gap-4 flex items-center ">
              <span className="flex">
                <input type="checkbox" className="mr-2 h-6 w-5" />
                <p>By checking this box you are agreeing with our Terms and Conditions and Privacy Policy.</p>
              </span>
              <Button title="Register" color="indigo" />
              <Button title="Login" color="indigo" />
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}
