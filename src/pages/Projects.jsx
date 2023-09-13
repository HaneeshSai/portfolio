import React, { useState } from "react";
import ProjectList from "../components/ProjectList";
import ProjectsListSmall from "../components/ProjectsListSmall";
import calc from "../assets/projectVids/calculator.gif";
import weather from "../assets/projectVids/weather.gif";
import analog from "../assets/projectVids/analogwatch.gif";
import calendar from "../assets/projectVids/calendar.gif";
import digi from "../assets/projectVids/digiwatch.gif";
import todo from "../assets/projectVids/todo.gif";
import textem from "../assets/projectVids/textem.gif";
import fami from "../assets/projectVids/fami.gif";
import ProjectsContent from "../components/ProjectsContent";
import bochi from "../assets/projectVids/bochi.gif";
import spaceball from "../assets/projectVids/spaceball.mp4";
import fps from "../assets/projectVids/fps.mp4";
import platform from "../assets/projectVids/platform.mp4";
import chef from "../assets/projectVids/chef.mp4";

export default function Projects({ isSmallScreen }) {
  const list = {
    web: [
      {
        name: "Live Weather App",
        media: weather,
        content:
          "A Weather app made using openweather api and react. fully used all the things the Api could offer for a free tier  ",
        link: isSmallScreen
          ? "http://v2.weatherapp.cetirizine.surge.sh/"
          : "http://weatherapp.cetirizine.surge.sh/",
        git: "https://github.com/HaneeshSai/React_Live_WeatherApp",
      },
      {
        name: "Scientific Calculator",
        media: calc,
        content:
          "A Scientific Calculator which can perform complex operations like square, cube, power, factorial, logarithm, and trigonometric calculations",
        link: "http://calculator.cetirizine.surge.sh/",
        git: "https://github.com/HaneeshSai/React_Calculator",
      },
      {
        name: "ToDo using RSEN",
        media: todo,
        content:
          "A RESN (React, Sqlite, Express, Nodejs) based To-Do app. Register and effortlessly save your todos and manage them whenever you want by logging in with username and password",
        link: "http://to-do.cetirizine.surge.sh/",
        git: "https://github.com/HaneeshSai/React_Todo",
      },
      {
        name: "Digital Watch",
        media: digi,
        content:
          "A React Digital watch Which also has the stop watch and timer functionality. While making this project i learned alot about the Date.time() function in javascript and its functions.",
        link: "https://digiwatch.cetirizine.surge.sh/",
        git: "https://github.com/HaneeshSai/React_digiWatch",
      },
      {
        name: "Analog Watch",
        media: analog,
        content:
          "A cool Analog Watch effect. Saw this cool watch as a screen saver in my and decided to remake it in React :D",
        link: "coolanalogwatch.cetirizine.surge.sh/",
        git: "https://github.com/HaneeshSai/React_analogWatch",
      },
      {
        name: "Calendar",
        media: calendar,
        content:
          "A simple Calendar helped, it was one of my first react app and helped me learn about how react components works and how to pass the props from one component to another component",
        link: "calendar.cetirizine.surge.sh/",
        git: "https://github.com/HaneeshSai/React_Calendar",
      },
      {
        name: "TextEm - A Chatting App",
        media: textem,
        content:
          "An ongoing Project, Chatting app from scratch which uses an sqlite database and socket.io functionalities fully. This project made me realize how big and complicated a Big-scale project can become. ive been try to contribute to it whenever i can. and so far is the progress. Check out my git repo for the code review",
        git: "https://github.com/HaneeshSai/TextEm-Chat-app",
      },
      {
        name: "Fami - a Music App",
        media: fami,
        content:
          "Another ongoing Project, Fami is a spotify based music app which lets you connect to your spotify account and use your playlists and trending songs. Ive designed the UI for the app and started working on but then i had to stop the progress because the spotify-web-playback is only available for the Premium users. I shall soon continue to work on it",
        git: "https://github.com/HaneeshSai/Fami-Spotify-app",
      },
    ],
    game: [
      {
        name: "Platformer Demo",
        media: platform,
        content:
          "This is my first ever game i have made in the unity game engine when i was still learning and understanding the basics of Game development, i learned about sprites and spritesheets, how the animations work, and how Unity's monobehaviour classes work. This game basically taught me everything about the game development",
      },
      {
        name: "Space Ball Shooter",
        media: spaceball,
        content:
          "This is one of my first ever game made in Unity with an advance AI system for enemies which always lurk in a maze and follow the player only if the player is at a certain distance away from the enemy position. I had alot of fun while making this",
      },
      {
        name: "Fps Shooter Asset",
        media: fps,
        content:
          "This is First Person Shooter asset demo made in Unity smooth animations, customizable speed, and skin options for a single gun. This asset also includes bullet trail and bullet hole effects. Experience a seamless gaming experience with user-friendly controls and visually appealing transitions.",
      },
      {
        name: "A Chef Game",
        media: chef,
        content:
          "A top down pixel art game, where a chef grows his crops and starts his restaurent, He also has to fight monsters whenever their is a raid on the chef's village, i had help from a friend for the art work and implemented all the game mechanics in Unity",
      },
    ],
    discord: [
      {
        name: "Bochi",
        media: bochi,
        content:
          "A custom Discord bot with over 40 unique commands. It can do a lot of things like managing the economy, keeping things civil, allowing for imaginative role-playing, offering fun games, and helping users keep track of their stuff. I used two different types of databases, MongoDB and SQLite, depending on what each command needed. This bot combines all the features from multiple other bots, and in the process, I learned a lot about how databases work.",
        git: "https://github.com/HaneeshSai/Bochi-Discord-bot",
      },
    ],
  };

  const [activePg, setActivePg] = useState(0);
  const [selectedpro, setSelectedpro] = useState("Live Weather App");
  const onselect = (data) => {
    setSelectedpro(data);
  };

  return (
    <div className=" w-3/4 h-screen font-poppins mb-10">
      <h1 className="text-4xl text-slate-100 md:text-5xl my-10 underline underline-offset-8">
        Projects
      </h1>
      <div className="flex justify-center">
        <ul className="flex text-slate-200  md:text-left text-center justify-center flex-col md:flex-row md:gap-10 text-lg">
          <li>
            <button
              onClick={() => {
                setActivePg(0);
                setSelectedpro(list.web[0]);
              }}
              className={
                activePg === 0
                  ? "p-2 text-red-400 underline underline-offset-4"
                  : "hover:text-red-400 p-2"
              }
            >
              Web Development
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActivePg(1);
                setSelectedpro(list.game[0]);
              }}
              className={
                activePg === 1
                  ? "p-2 text-red-400 underline underline-offset-4"
                  : "hover:text-red-400 p-2"
              }
            >
              Game Devlopment
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActivePg(2);
                setSelectedpro(list.discord[0]);
              }}
              className={
                activePg === 2
                  ? "underline underline-offset-4 p-2 text-red-400 bg-slate-800"
                  : "hover:text-red-400 p-2"
              }
            >
              Discord Bots
            </button>
          </li>
        </ul>
      </div>
      {isSmallScreen ? (
        <ProjectsListSmall list={list} page={activePg} />
      ) : (
        <div className="flex justify-between gap-36 text-slate-100 my-10 items-center h-3/4">
          <ProjectList page={activePg} list={list} selected={onselect} />
          <div>
            <ProjectsContent currentProject={selectedpro} list={list} />{" "}
          </div>
        </div>
      )}
    </div>
  );
}
