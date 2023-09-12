import React from "react";

export default function Hamburger({ navlinks, nav, ham }) {
  return (
    <div className="font-poppins absolute right-0 text-slate-200 w-screen h-screen backdrop-blur-sm -m-3 py-0 flex justify-end items-center">
      <div className="bg-[#1d1f39] h-screen p-6 rounded-md mb-2 flex justify-center items-center">
        <ul className="flex flex-col gap-16 text-center text-2xl">
          {navlinks.map((e, i) => (
            <li key={i}>
              <button
                className="group transition duration-300"
                onClick={() => {
                  ham();
                  if (i === 0) nav(i, 100);
                  else if (i === 1) nav(i, -100);
                  else nav(i, 0);
                }}
              >
                {e.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
