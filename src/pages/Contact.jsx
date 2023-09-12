import React, { useState } from "react";
import { BsGithub, BsLinkedin, BsDiscord, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const contacts = [
  {
    name: "GitHub",
    link: "https://github.com/HaneeshSai",
    icon: <BsGithub size={25} className="" />,
  },
  {
    name: "LinkedIn",
    link: "",
    icon: <BsLinkedin size={25} />,
  },
  {
    name: "Email",
    link: "",
    icon: <AiOutlineMail size={25} />,
  },
  {
    name: "Discord",
    link: "",
    icon: <BsDiscord size={25} />,
  },
  {
    name: "Instagram",
    link: "",
    icon: <BsInstagram size={25} />,
  },
];

export default function Contact() {
  const [msg, setmsg] = useState("");
  return (
    <div className="text-slate-200 w-3/4 h-screen font-poppins mt-28 flex flex-col items-center">
      <h1 className="font-semibold text-2xl md:text-4xl my-5 md:my-14 underline underline-offset-8">
        Contact me
      </h1>
      <p className="md:text-3xl text-xl">But how?</p>
      <p className="md:text-2xl text-md text-center md:my-2">
        Well, here are the ways you can contact. I will always reply {":)"}.
      </p>
      <input
        type="text"
        placeholder="Enter Your contact details, could be Email, or social media usernames"
        className="my-3 p-2 resize-none text-lg outline-none rounded-md opacity-50 border-slate-400 border md:w-[600px] bg-opacity-10 bg-[#2e3154] w-full"
      />
      <textarea
        type="text"
        className="my-3 p-2 resize-none text-lg outline-none rounded-md md:h-48 h-64 border-slate-400 border w-full md:w-[600px] bg-opacity-10 bg-[#2e3154]"
        onChange={(e) => {
          setmsg(e.target.value);
          console.log(msg);
        }}
        placeholder="Send a message."
      />
      <button className="m-3 p-2 border border-slate-200 transition duration-200 rounded-lg hover:-translate-x-[2px] hover:-translate-y-[2px] hover:text-red-400">
        Send message
      </button>
      <p className="font-semibold text-3xl m-4">OR</p>
      <ul className="md:flex grid grid-cols-3 gap-5 md:gap-16">
        {contacts.map((e) => (
          <li className="flex flex-col items-center gap-2 justify-center hover:text-[#2bd0b2]">
            <a href={e.link}>{e.icon}</a>
            {e.name}
          </li>
        ))}
      </ul>
      <p className="text-[#2bd0b2] text-[10px] mt-5 w-screen text-right mr-5">
        Designed and Built by Haneesh Sai
      </p>
    </div>
  );
}
