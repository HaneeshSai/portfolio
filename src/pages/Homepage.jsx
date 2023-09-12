import React, { useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Homepage({ isSmallScreen, nav }) {
  const [text] = useTypewriter({
    words: ["WEB DEVELOPER.", "GAME DEVELOPER.", "DISCORD BOT DEVELOPER."],
    loop: {},
  });

  return (
    <div className=" my-52 text-slate-100 font-poppins flex flex-col gap-1 w-3/4 md:text-2xl snap-start">
      <div className="h-[20rem]">
        <p className="mx-1">Hey! my name is</p>
        <h1 className="text-red-500 md:text-7xl text-5xl font-bold">
          HANEESH SAI
        </h1>
        <h2 className=" md:text-6xl text-4xl">
          I am a {isSmallScreen ? <br /> : null}{" "}
          <span className="text-red-500 font-semibold tracking-wide">
            {text} <Cursor cursorColor="white" />
          </span>
        </h2>
        <p className="mx-1">
          I create websites/web apps, Video Games/Video Game Assets, and custom
          Discord bots
        </p>
      </div>
      <button
        className="text-slate-100 border-4 px-3 py-1 w-fit relative top-8 left-20 hover:border-red-500 
        hover:shadow-sm shadow-red-500"
        onClick={() => {
          nav(0, 100);
        }}
      >
        See More
      </button>
    </div>
  );
}
