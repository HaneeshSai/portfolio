import React from "react";

export default function ProjectsListSmall({ page, list }) {
  return (
    <div className="mt-3 h-3/5 border border-slate-700 rounded-lg text-slate-200 font-poppins overflow-x-hidden overflow-y-auto ">
      {page === 0 ? (
        <ul className="flex flex-col items-center">
          {list.web.map((e, i) => (
            <li key={i} className="flex flex-col items-center p-2 border-b-2">
              <img
                id="projectimg"
                className="rounded-lg m-2"
                src={e.media}
                alt=""
              />
              <p className="text-xl underline underline-offset-8 mb-4 text-red-400">
                {e.name}
              </p>
              <p className="text-center">{e.content}</p>
              <div className="flex justify-center gap-8 w-56 m-3">
                {e.link ? (
                  <a
                    href={e.link}
                    className="flex justify-center items-center text-black w-24 rounded-lg bg-yellow-400"
                  >
                    Live Demo
                  </a>
                ) : null}{" "}
                <a
                  href={e.git}
                  className="flex justify-center items-center text-white w-24 py-1 rounded-lg bg-gray-600"
                >
                  GitHub
                </a>
              </div>
            </li>
          ))}
        </ul>
      ) : page === 1 ? (
        <ul>
          {list.game.map((e, i) => (
            <li key={i} className="flex flex-col items-center border-b-2 p-2">
              <video key={i} width="320" height="190" autoPlay controls muted>
                <source src={e.media} type="video/mp4" />
              </video>
              <p className="text-xl underline underline-offset-8 mb-4 text-red-400">
                {e.name}
              </p>
              <p className="text-center">{e.content}</p>
              <div className="flex justify-center gap-8 w-56 m-3">
                {e.link ? (
                  <a
                    href={e.link}
                    className="flex justify-center items-center text-black w-24 rounded-lg bg-yellow-400"
                  >
                    Live Demo
                  </a>
                ) : null}{" "}
                <a
                  href={e.git}
                  className="flex justify-center items-center text-white w-24 py-1 rounded-lg bg-gray-600"
                >
                  GitHub
                </a>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {list.discord.map((e, i) => (
            <li key={i} className="flex flex-col items-center border-b-2 p-2">
              <img
                id="projectimg"
                className="rounded-lg m-2"
                src={e.media}
                alt=""
              />
              <p className="text-xl underline underline-offset-8 mb-4 text-red-400">
                {e.name}
              </p>
              <p className="text-center">{e.content}</p>
              <div className="flex justify-center gap-8 w-56 m-3">
                {e.link ? (
                  <a
                    href={e.link}
                    className="flex justify-center items-center text-black w-24 rounded-lg bg-yellow-400"
                  >
                    Live Demo
                  </a>
                ) : null}{" "}
                {e.git ? (
                  <a
                    href={e.git}
                    className="flex justify-center items-center text-white w-24 py-1 rounded-lg bg-gray-600"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
