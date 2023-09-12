import React from "react";
import html from "../assets/icons/webdev/html-5.png";
import css from "../assets/icons/webdev/css-3.png";
import js from "../assets/icons/webdev/js.png";
import react from "../assets/icons/webdev/react.png";
import tw from "../assets/icons/webdev/tailwind-css-icon.png";
import nodejs from "../assets/icons/webdev/nodejs.png";
import mysql from "../assets/icons/webdev/mysql.png";
import sqlite from "../assets/icons/webdev/sqlite.png";
import mongodb from "../assets/icons/webdev/mongodb.png";
import express from "../assets/icons/webdev/express.png";

export default function WebSkillsContent() {
  return (
    <div>
      <div className="grid md:grid-cols-5 grid-cols-3 gap-24 gap-y-24 mt-10 ">
        <div className="flex flex-col justify-center items-center">
          <img src={html} alt="html png" />
          HTML
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={css} alt="css png" />
          CSS
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={js} alt="" />
          Javascript
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={nodejs} alt="" />
          NodeJS
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={react} alt="" />
          React
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            style={{
              width: 70,
            }}
            src={tw}
            alt=""
          />
          TailwindCSS
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={mysql} alt="" />
          MySql
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-18 w-20" src={sqlite} alt="" />
          Sqlite
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={mongodb} alt="" />
          MongoDB
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={express} alt="" />
          ExpressJS
        </div>
      </div>
    </div>
  );
}
