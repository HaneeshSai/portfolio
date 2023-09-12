import React from "react";
import csharp from "../assets/icons/gamedev/c-sharp.png";
import gml from "../assets/icons/gamedev/image-removebg-preview.png";
import c from "../assets/icons/gamedev/letter-c.png";
import py from "../assets/icons/gamedev/python.png";
import sqlite from "../assets/icons/webdev/sqlite.png";

export default function GameSkillsContent() {
  return (
    <div>
      <div className="grid md:grid-cols-5 grid-cols-3 gap-24 gap-y-24 mt-10  ">
        <div className="flex flex-col justify-center items-center">
          <img src={csharp} alt="html png" />
          CSharp(C#)
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={c} alt="css png" />C
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={py} alt="" />
          Python
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={gml} alt="" />
          GameMaker Language
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-18 w-20" src={sqlite} alt="" />
          Sqlite
        </div>
      </div>
    </div>
  );
}
