import React, { useEffect, useState } from "react";
import "../css/spans.css";

export default function ProjectList({ page, list, selected }) {
  const [select, setSelect] = useState(0);
  useEffect(() => {
    console.log(page);
    if (page === 0) selected(list.web[0]);
    else if (page === 1) selected(list.game[0]);
    else if (page === 2) selected(list.discord[0]);
  }, [page]);
  return (
    <div className="">
      {page === 0 ? (
        <ul>
          {list.web.map((e, i) => (
            <li key={i}>
              <button
                onClick={() => {
                  selected(e);
                  setSelect(i);
                }}
                className={
                  select === i
                    ? "py-3 px-4 text-lg w-64 text-left cursor-pointer border-l-2 text-red-400 bg-slate-800"
                    : "py-3 px-4 text-lg w-64 text-left hover:bg-slate-800 border-l hover:text-red-400 cursor-pointer"
                }
              >
                {e.name}
              </button>
            </li>
          ))}
        </ul>
      ) : page === 1 ? (
        <ul>
          {list.game.map((e, i) => (
            <li key={i}>
              <button
                onClick={() => {
                  selected(e);
                  setSelect(i);
                }}
                className={
                  select === i
                    ? "py-3 px-4 text-lg w-64 text-left cursor-pointer border-l-2 text-red-400 bg-slate-800"
                    : "py-3 px-4 text-lg w-64 text-left hover:bg-slate-800 border-l hover:text-red-400 cursor-pointer"
                }
              >
                {e.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {list.discord.map((e, i) => (
            <li key={i}>
              <button
                onClick={() => {
                  selected(e);
                  setSelect(i);
                }}
                className={
                  select === i
                    ? "py-3 px-4 text-lg w-64 text-left cursor-pointer border-l-2 text-red-400 bg-slate-800"
                    : "py-3 px-4 text-lg border-l w-64 text-left hover:bg-slate-800 hover:text-red-400 cursor-pointer"
                }
              >
                {e.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
