"use client";
import { account } from "@/appwrite/appwriteConfig";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const navigate = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const logIn = ({ email, password }: any) => {
    try {
      const promise = account.createEmailSession(email, password).then(
        function (response) {
          navigate.push("/profile")
        },
        function (error) {
          console.log(error.message); 
          alert(error.message)
        }
      );
    } catch (error: any) {
      console.log(error.message);

        alert(error.message);
    }
  };

  const handleLogin = () => {
    logIn({ email, password });
  };
  return (
    <div className="bg-slate-700 p-2 ">
      <div className="flex justify-center p-4 m-32 bg-slate-800">
        <div className="flex flex-col p-4 bg-slate-900">
          <input
            type="email"
            name=""
            placeholder="enter email"
            className="m-2 p-2 text-black focus:text-white rounded-lg focus:bg-slate-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name=""
            placeholder="enter password"
            className=" m-2 p-2 text-black focus:text-white rounded-lg focus:bg-slate-900"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={handleLogin}
            className="bg-orange-400 rounded-md font-xl font-bold border-x-2 border-blue-500 m-3 py-2 "
          >
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
}
