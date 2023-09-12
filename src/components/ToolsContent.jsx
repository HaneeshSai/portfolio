import React from "react";
import canva from "../assets/icons/tools/anva.png";
import ase from "../assets/icons/tools/aseprite.png";
import blend from "../assets/icons/tools/blender.png";
import figma from "../assets/icons/tools/figma.png";
import gm from "../assets/icons/tools/gamemaker.png";
import git from "../assets/icons/tools/github.png";
import godot from "../assets/icons/tools/godot.png";
import krita from "../assets/icons/tools/krita.png";
import unity from "../assets/icons/tools/unity.png";
import vscode from "../assets/icons/tools/vscode.png";

export default function ToolsContent() {
  return (
    <div>
      <div className="grid md:grid-cols-5 grid-cols-3 gap-24 gap-y-24 mt-10  ">
        <div className="flex flex-col justify-center items-center">
          <img src={unity} alt="html png" />
          Unity
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={blend} alt="css png" />
          Blender
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={ase} alt="" />
          Aseprite
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={krita} alt="" />
          Krita
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={figma} alt="" />
          Figma
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={canva} alt="" />
          Canva
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={git} alt="" />
          GitHub
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-18 w-20" src={gm} alt="" />
          GameMaker Studio
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={godot} alt="" />
          Godot
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={vscode} alt="" />
          VS Code
        </div>
      </div>
    </div>
  );
}
