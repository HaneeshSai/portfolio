import React, { useEffect, useState } from "react";
let games = [];

export default function ProjectsContent({ currentProject, list }) {
  const [videoKey, setVideoKey] = useState(0); // Add a state to control video element re-rendering

  useEffect(() => {
    list.game.map((e) => {
      games.push(e.name);
    });
  }, []);

  useEffect(() => {
    // When currentProject changes, increment the videoKey to force re-render
    setVideoKey((prevKey) => prevKey + 1);
  }, [currentProject]);

  return (
    <div className="flex flex-col justify-between items-center gap-3">
      <h1 className="text-red-400 text-2xl font-semibold">
        {currentProject.name}
      </h1>
      {!games.includes(currentProject.name) ? (
        <img
          className="max-h-72 object-contain rounded-lg"
          src={currentProject.media}
          alt=""
        />
      ) : (
        <video key={videoKey} width="320" height="190" autoPlay muted controls>
          <source src={currentProject.media} type="video/mp4" />
        </video>
      )}
      <p className="text-center">{currentProject.content}</p>
      <div className="flex justify-around gap-36 mt-2">
        {currentProject.link ? (
          <a
            href={currentProject.link}
            target="_blank"
            className=" border-red-600 border-2 px-2 py-1 transition duration-200 ease-in-out rounded-md text-white hover:shadow-[2px_2px_0px_0px_rgba(117,25,25)]  hover:-translate-x-[2px] delay-100 hover:-translate-y-[2px] cursor-pointer"
          >
            Live Demo
          </a>
        ) : null}
        {currentProject.git ? (
          <a
            href={currentProject.git}
            target="_blank"
            className="bg-gray-600 px-2 w-24 text-center py-1 rounded-md transtion duration-200 ease-in-out hover:bg-gray-200 hover:text-black flex justify-center items-center"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </div>
  );
}
