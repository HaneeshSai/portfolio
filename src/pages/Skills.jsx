import React, { useEffect, useState, useRef } from "react";
import SkillsContent from "../components/SkillsContent";

export default function Skills() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="mx-52 font-poppins">
      <h1 className=" text-slate-100 md:text-5xl text-4xl underline underline-offset-8 flex justify-center md:justify-start mb-7">
        Skills
      </h1>
      <div className="h-1/2 flex-row md:flex gap-12">
        <ul className="flex flex-col justify-center gap-0 text-slate-400  ">
          <li className="">
            <button
              onClick={() => setSelected(0)}
              className={
                selected === 0
                  ? "p-2 w-48 md:p-2 text-center md:text-left md:w-48  text-base md:border-l-2 bg-slate-800 text-slate-200"
                  : "p-2 text-center md:text-left w-48 md:p-2 md:w-48 text-base  md:border-l hover:bg-slate-800 cursor-pointer hover:border-l-2"
              }
            >
              Web Development
            </button>
          </li>
          <li className="">
            <button
              onClick={() => setSelected(1)}
              className={
                selected === 1
                  ? "p-2 text-center md:text-left w-48 md:p-2 md:w-48 text-base md:border-l-2 bg-slate-800 text-slate-200"
                  : "p-2 text-center md:text-left w-48 md:p-2 md:w-48 text-base  md:border-l hover:bg-slate-800 cursor-pointer hover:border-l-2"
              }
            >
              Game Development
            </button>
          </li>
          <li className="">
            <button
              onClick={() => setSelected(2)}
              className={
                selected === 2
                  ? "p-2 text-center md:text-left w-48 md:p-2 md:w-48 text-base md:border-l-2 bg-slate-800 text-slate-200"
                  : "p-2 text-center md:text-left w-48 md:p-2 md:w-48 text-base md:border-l hover:bg-slate-800 cursor-pointer hover:border-l-2"
              }
            >
              Tools
            </button>
          </li>
        </ul>
        <div>
          <SkillsContent selected={selected} />
        </div>
      </div>
    </div>
  );
}
