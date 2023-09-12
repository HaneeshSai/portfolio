import React from "react";
import "../css/spans.css";

export default function () {
  return (
    <div className="md:mx-52 my-44 mx-4  snap-center md:text-lg text-sm">
      <h1 className="font-poppins text-slate-100 text-3xl underline underline-offset-8 m-5 my-7">
        About me
      </h1>
      <p className="text-slate-200 font-poppins m-5 ">
        Hello! I'm Haneesh Sai, a B.Tech student majoring in Artificial
        Intelligence and Machine Learning (AI&ML). I'm a coding enthusiast who
        loves turning ideas into reality through the magic of computer code.
      </p>
      <p className="text-slate-200 font-poppins m-5">
        I started my coding adventure by creating games using <span>Unity</span>{" "}
        and <span>C#</span>. It was so much fun that I couldn't get enough! But
        then, I stumbled upon web development, and it turned out to be even more
        exciting than I expected. I got the hang of{" "}
        <span>Front-end development</span> with <span>React</span>, and it made
        building web apps a breeze.
      </p>
      <p className="text-slate-200 font-poppins m-5">
        Later on, I explored the world of <span>Back-end development</span>. I
        got the hang of it by making <span>Discord bots</span> using{" "}
        <span>Node.js</span> and <span>DiscordJS</span>. I also learned how to
        connect the front-end and back-end parts of a web app using{" "}
        <span>Express.js</span>. Now, I can proudly say I'm a{" "}
        <span>Full-Stack Developer</span>, and I still have my love for{" "}
        <span>Game Gevelopment.</span>
      </p>
      <p className="text-slate-200 font-poppins m-5">
        Through making games, I learned about{" "}
        <span>Object-Oriented Programming</span> using
        <span>C#</span>. In the past two years, I've worked on all sorts of
        games, from <span>First Person shooters</span> to{" "}
        <span>2D platformers</span>, and even projects with cool stuff like{" "}
        <span>projectiles</span> and <span>pixel art</span>. I've also dabbled
        in 3D graphics using <span>Blender</span> and mastered{" "}
        <span>2D pixel</span> art with tools like <span>Krita</span> and{" "}
        <span>Aseprite.</span>
      </p>
      <p className="text-slate-200 font-poppins m-5">
        In a nutshell, I'm a coding enthusiast who enjoys creating all kinds of
        cool stuff with technology. Whether it's <span>games</span>,{" "}
        <span>web apps</span>, or diving into the world of AI and ML, I'm always
        up for new challenges and making awesome things happen.
      </p>
    </div>
  );
}
