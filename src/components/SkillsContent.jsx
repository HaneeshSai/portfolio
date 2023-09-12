import React, { useEffect, useState } from "react";
import WebSkillsContent from "./WebSkillsContent";
import "../css/spans.css";
import GameSkillsContent from "./GameSkillsContent";
import ToolsContent from "./ToolsContent";

export default function SkillsContent({ selected }) {
  return (
    <div className="font-poppins h-screen text-slate-200 text-sm text-center md:text-lg">
      <div className="my-5 text-2xl underline underline-offset-4">
        {selected === 0 ? (
          <h1>Web Development</h1>
        ) : selected === 1 ? (
          <h1>Game Development</h1>
        ) : (
          <h1>Tools</h1>
        )}
      </div>
      {selected === 0 ? (
        <WebSkillsContent />
      ) : selected === 1 ? (
        <GameSkillsContent />
      ) : (
        <ToolsContent />
      )}
    </div>
  );
}
